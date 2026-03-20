import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Gmail SMTP configuration
// TO DO: Replace YOUR_GMAIL@gmail.com with your actual Gmail.
// Replace YOUR_APP_PASSWORD with an App Password generated from your Google Account security settings.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YOUR_GMAIL@gmail.com',  
    pass: 'YOUR_APP_PASSWORD'      
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, phone, email, service, message } = req.body;

  try {
    const mailOptions = {
      from: email,
      to: 'YOUR_GMAIL@gmail.com', // Where you want to receive the messages
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Needed:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Contact form backend server is running on http://localhost:${PORT}`);
});
