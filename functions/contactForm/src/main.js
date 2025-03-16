import { Client } from "node-appwrite";
import nodemailer from "nodemailer";

export default async ({ req, res, log, error }) => {
  // Initialize Appwrite client
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(process.env.APPWRITE_FUNCTION_API_KEY); // Use a secure API key

  // ✅ Ensure request method is POST
  if (req.method !== "POST") {
    return res.json({ error: "Invalid request method. Only POST allowed." }, 405);
  }

  // ✅ Parse request body
  const { name, email, phone, message } = req.bodyJson ?? {};

  // ✅ Validate required fields
  if (!name || !email || !phone || !message) {
    return res.json({ error: "All fields are required." }, 400);
  }

  // ✅ Format the email content
  const emailBody = `
  New Contact Form Submission:

  📝 Name: ${name}
  📧 Email: ${email}
  📞 Phone: ${phone}

  📩 Message:
  ${message}

  ---
  Sent via GenGraphic Contact Form
  `;

  // ✅ Configure SMTP transporter (Replace with your SMTP settings)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Example: "smtp.mailtrap.io"
    port: process.env.SMTP_PORT, // Example: 587 (use 465 for secure)
    secure: process.env.SMTP_PORT === "465", // True for 465, false for other ports
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    // ✅ Send the email
    await transporter.sendMail({
      from: `"GenGraphic Contact" <${process.env.SMTP_USERNAME}>`, // Sender email
      to: process.env.RECIPIENT_EMAIL, // Destination email (Your email)
      subject: "New Contact Form Submission",
      text: emailBody, // Plain text email content
    });

    log(`✅ Email sent successfully to ${process.env.RECIPIENT_EMAIL}`);
    return res.json({ success: true, message: "Email sent successfully!" });

  } catch (err) {
    error("❌ Failed to send email: " + err.message);
    return res.json({ error: "Internal server error: Unable to send email." }, 500);
  }
};
