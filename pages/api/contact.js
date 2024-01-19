// // pages/api/contact.ts

// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// // Load environment variables from .env file
// dotenv.config();

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const { name, email, message } = req.body;

//       // Create a Nodemailer transporter
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_PASSWORD,
//         },
//       });

//       // Define email options
//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: "recipient_email@example.com", // Replace with your desired email address
//         subject: "New Form Submission",
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//       };

//       // Send the email
//       await transporter.sendMail(mailOptions);

//       console.log("Email sent successfully");

//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error("Error processing form data:", error);
//       res.status(500).json({ success: false, error: "Internal Server Error" });
//     }
//   } else {
//     res.status(405).json({ success: false, error: "Method Not Allowed" });
//   }
// }
