import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Configure AWS SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, phone, email, childAge } = body;

    // Validation
    if (!fullName || !phone || !email || !childAge) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Youth Circus Class Inquiry

Contact Information:
- Name: ${fullName}
- Phone: ${phone}
- Email: ${email}
- Child Age Group: ${childAge}

Submitted from: Youth Circus Landing Page
Time: ${new Date().toLocaleString()}

Please follow up with this inquiry within 24 hours for best conversion rates.
    `.trim();

    const htmlContent = `
<h2>New Youth Circus Class Inquiry</h2>

<h3>Contact Information:</h3>
<ul>
  <li><strong>Name:</strong> ${fullName}</li>
  <li><strong>Phone:</strong> ${phone}</li>
  <li><strong>Email:</strong> ${email}</li>
  <li><strong>Child Age Group:</strong> ${childAge}</li>
</ul>

<p><strong>Submitted from:</strong> Youth Circus Landing Page<br>
<strong>Time:</strong> ${new Date().toLocaleString()}</p>

<p style="color: #e67e22; font-weight: bold;">
Please follow up with this inquiry within 24 hours for best conversion rates.
</p>
    `.trim();

    // Send email via AWS SES
    const sendEmailCommand = new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL!,
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL!],
      },
      Message: {
        Subject: {
          Data: `New Youth Circus Inquiry - ${fullName}`,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: emailContent,
            Charset: 'UTF-8',
          },
          Html: {
            Data: htmlContent,
            Charset: 'UTF-8',
          },
        },
      },
    });

    await sesClient.send(sendEmailCommand);

    // Send auto-reply to the customer
    const autoReplyContent = `
Dear ${fullName},

Thank you for your interest in San Diego Circus Center's youth programs!

We've received your inquiry for our ${childAge} circus classes and will get back to you within 24 hours with more information about:

• Class schedules and availability
• Pricing and enrollment details
• What to expect in your child's first class
• Answers to any questions you may have

In the meantime, feel free to:
• Browse our full schedule: https://goteamup.com/p/39027-san-diego-circus-center/c/schedule
• Call us directly: (619) 487-1239
• Visit our website: https://sandiegocircuscenter.org

We're excited to help your child discover the joy of circus arts!

Best regards,
The San Diego Circus Center Team

---
This is an automated response. Please don't reply to this email.
For immediate assistance, call (619) 487-1239.
    `.trim();

    const autoReplyHtml = `
<h2>Thank you for your interest!</h2>

<p>Dear ${fullName},</p>

<p>Thank you for your interest in San Diego Circus Center's youth programs!</p>

<p>We've received your inquiry for our <strong>${childAge}</strong> circus classes and will get back to you within 24 hours with more information about:</p>

<ul>
  <li>Class schedules and availability</li>
  <li>Pricing and enrollment details</li>
  <li>What to expect in your child's first class</li>
  <li>Answers to any questions you may have</li>
</ul>

<h3>In the meantime, feel free to:</h3>
<ul>
  <li><a href="https://goteamup.com/p/39027-san-diego-circus-center/c/schedule">Browse our full schedule</a></li>
  <li>Call us directly: <a href="tel:+16194871239">(619) 487-1239</a></li>
  <li>Visit our website: <a href="https://sandiegocircuscenter.org">sandiegocircuscenter.org</a></li>
</ul>

<p>We're excited to help your child discover the joy of circus arts!</p>

<p>Best regards,<br>
<strong>The San Diego Circus Center Team</strong></p>

<hr>
<p><small>This is an automated response. Please don't reply to this email.<br>
For immediate assistance, call <a href="tel:+16194871239">(619) 487-1239</a>.</small></p>
    `.trim();

    // Send auto-reply
    const autoReplyCommand = new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL!,
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Subject: {
          Data: 'Thank you for your interest in Youth Circus Classes!',
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: autoReplyContent,
            Charset: 'UTF-8',
          },
          Html: {
            Data: autoReplyHtml,
            Charset: 'UTF-8',
          },
        },
      },
    });

    await sesClient.send(autoReplyCommand);

    return NextResponse.json(
      { message: 'Form submitted successfully! Check your email for confirmation.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
