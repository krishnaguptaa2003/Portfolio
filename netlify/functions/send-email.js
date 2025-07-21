const nodemailer = require("nodemailer");
const { MongoClient } = require("mongodb");

require("dotenv").config();

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const data = JSON.parse(event.body);
  const { firstName, lastName, email, phone, message } = data;

  const userEmail = process.env.EMAIL_USER;
  const appPassword = process.env.EMAIL_PASS;
  const mongoUri = process.env.MONGO_URI;

  if (!userEmail || !appPassword || !mongoUri) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Missing environment variables." }),
    };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: appPassword,
    },
  });

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

  const client = new MongoClient(mongoUri);

  try {
    await transporter.sendMail(mailOptions);
    await client.connect();

    const db = client.db("portfolio");
    const collection = db.collection("messages");

    await collection.insertOne({
      firstName,
      lastName,
      email,
      phone,
      message,
      date: new Date(),
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" }, // 👈 required!
      body: JSON.stringify({ success: true, message: "Message sent and saved!" }),
    };

  } catch (error) {
    console.error("❌ ERROR:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  } finally {
    await client.close();
  }
};
