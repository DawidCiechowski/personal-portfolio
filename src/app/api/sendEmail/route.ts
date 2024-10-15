import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { email, message, name } = await req.json();

  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Server-side email validation
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json({ success: false, message: 'Invalid email format' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PASSWORD, 
    },
  });

  const mailToSelfOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER, // Send the email to yourself
    subject: `New Contact Form Submission From: ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>New message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `,
  };

  const mailToContactingPersonOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: `Your Message Arrived Safely! :)`,
    html: `
      <div style="border-radius: 0.375rem; font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #f0f0f0; background-color: #FF6500; color: #1E3E62">
        <h1 style="color: #000000; font-weight: 800; text-align: center;">Message Received</h1>
        <p style="font-size: 16px; font-weight: 500;  color: #1E3E62;">Hi ${name}! :D</p>
        <p style="font-size: 16px; font-weight: 500; color: #1E3E62;">Thank you for reaching out! Your message has arrived to me safely and I'll try to answer ASAP.</p>
        <p style="font-size: 16px; font-weight: 500;  color: #1E3E62;">Here is a copy of your message:</p>
        <div style="border-left: 4px solid #0B192C; padding-left: 15px; margin-top: 15px;">
          <p style="font-size: 16px; font-weight: 500; color: #1E3E62;">${message}</p>
        </div>
        <p style="font-size: 16px; color: #1E3E62; margin-top: 20px;">Best regards,</p>
        <p style="font-size: 22px; font-weight: 700; color: #1E3E62;"><strong>Dawid Ciechowski</strong></p>
        <p style="font-size: 20px; font-weight: 600; color: #1E3E62;">Senior Software Engineer</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailToSelfOptions); // Email to yourself
    await transporter.sendMail(mailToContactingPersonOptions); // Email to the contacting person

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to send emails', error }, { status: 500 });
  }
}