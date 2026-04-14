import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { buildEmailHtml, sanitize } from '../../../utils/emailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

// Validate required environment variables
function getEnvVariable(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

const FROM_EMAIL = getEnvVariable('FROM_EMAIL');
const TO_EMAIL = getEnvVariable('TO_EMAIL');

// API route for handling contact form submissions via Resend
export async function POST(request: NextRequest) {
  try {
    // Validate Content-Type header
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type must be application/json' },
        { status: 415 }
      );
    }

    const body = await request.json();

    // Validate runtime types
    if (typeof body.name !== 'string' || typeof body.email !== 'string' || 
        typeof body.subject !== 'string' || typeof body.message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid data types' },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    // Validate required fields (non-empty strings)
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format (requires at least 2 char TLD)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email using Resend API
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `Portfolio Contact: ${sanitize(subject)}`,
      html: buildEmailHtml(name, email, subject, message),
      replyTo: email,
    });

    // Handle Resend API errors
    if (data.error) {
      return NextResponse.json(
        { error: data.error.message },
        { status: 500 }
      );
    }

    // Validate response data
    if (!data.data?.id) {
      return NextResponse.json(
        { error: 'Email sent but no ID returned from service' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data.data.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
