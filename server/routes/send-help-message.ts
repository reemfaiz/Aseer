import { RequestHandler } from "express";
import nodemailer from "nodemailer";

export const handleSendHelpMessage: RequestHandler = async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      res.status(400).json({ error: "Email and message are required" });
      return;
    }

    const emailUser = "aseerco8supprt@gmail.com";
    const emailPassword = "Aseer123123";

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPassword,
        },
      });

      await transporter.sendMail({
        from: emailUser,
        to: "aseerco8supprt@gmail.com",
        replyTo: email,
        subject: `Help Request from ${email}`,
        html: `
          <h2>New Help Request</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });

      res.status(200).json({
        message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      res.status(500).json({
        error: "Failed to send email. Please try again later.",
      });
    }
  } catch (error) {
    console.error("Error processing help message:", error);
    res.status(500).json({ error: "Failed to process message" });
  }
};
