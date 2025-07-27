// netlify/functions/send-email.js
const nodemailer = require("nodemailer");
const { MongoClient } = require("mongodb");

require("dotenv").config(); // This loads .env variables locally

exports.handler = async (event) => {
  console.log("Function started.");

  if (event.httpMethod !== "POST") {
    console.log("Method Not Allowed.");
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (parseError) {
    console.error("❌ JSON Parse Error:", parseError);
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: "Invalid JSON in request body." }),
    };
  }

  const { firstName, lastName, email, phone, message } = data;
  console.log("Parsed request body:", { firstName, email });

  const userEmail = process.env.EMAIL_USER;
  const appPassword = process.env.EMAIL_PASS;
  const mongoUri = process.env.MONGO_URI;

  console.log("Environment Variables Loaded (check if true):", {
    userEmail: !!userEmail,
    appPassword: !!appPassword,
    mongoUri: !!mongoUri ? mongoUri.substring(0, 30) + "..." : false // Log partial URI for security
  });

  if (!userEmail || !appPassword || !mongoUri) {
    console.error("Missing environment variables.");
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: "Missing environment variables. Please check Netlify settings or local .env." }),
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: appPassword,
    },
  });
  console.log("Nodemailer transporter created.");

  // Corrected: Use 'mongoUri' variable here
  const client = new MongoClient(mongoUri);
  console.log("MongoDB client initialized.");

  try {
    console.log("Attempting to connect to MongoDB...");
    await client.connect();
    console.log("Connected to MongoDB.");

    const db = client.db("portfolio"); // Make sure "portfolio" is your actual DB name
    const collection = db.collection("messages");
    console.log("MongoDB database and collection selected.");

    // Rate limit logic: Check count BEFORE sending ANY email or saving data
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const count = await collection.countDocuments({
      email: email,
      date: { $gte: since }
    });
    console.log(`Messages from this email in last 24h: ${count}`);

    if (count >= 3) {
      console.log("Rate limit exceeded. No email will be sent, and data will not be saved.");
      // No email sent to you, no data saved to DB.
      return {
        statusCode: 429,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          success: false,
          message: "You can only send 3 messages per 24 hours from this email address. Please try again after 24 hours."
        }),
      };
    }

    // If rate limit NOT exceeded, proceed with regular email and data save
    const mailOptions = {
      from: `"Portfolio Contact" <${userEmail}>`,
      to: userEmail,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };
    console.log("Attempting to send regular email...");
    await transporter.sendMail(mailOptions);
    console.log("Regular email sent successfully.");

    console.log("Attempting to save to MongoDB...");
    await collection.insertOne({
      firstName,
      lastName,
      email,
      phone,
      message,
      date: new Date(),
    });
    console.log("Data saved to MongoDB.");

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: true, message: "Message sent and saved to DB!" }),
    };

  } catch (error) {
    console.error("❌ FUNCTION ERROR:", error);
    let errorMessage = "An unknown error occurred.";
    if (error.message) {
        errorMessage = error.message;
    } else if (error.response && error.response.body && error.response.body.errors) {
        errorMessage = error.response.body.errors.map(err => err.message).join(', ');
    }

    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: errorMessage, stack: error.stack }),
    };
  } finally {
    if (client && client.topology && client.topology.isConnected()) {
      console.log("Closing MongoDB client connection.");
      await client.close();
    } else {
        console.log("MongoDB client was not connected or already closed.");
    }
  }
};
