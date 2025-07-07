import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    // Check if Resend is properly initialized
    if (!resend) {
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ritvikshah2009@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 