import type { APIRoute } from 'astro';
import { z } from 'zod';
import { Resend } from 'resend';

// Mark as server-rendered
export const prerender = false;

// Initialize Resend with API key
const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse JSON instead of FormData
    const body = await request.json();

    console.log('Received data:', body);

    // Validate with Zod
    const validated = contactSchema.parse(body);

    console.log('Validated data:', validated);

    // Send email via Resend
    const { data: emailData, error } = await resend.emails.send({
      from: 'VetPulse Contact <onboarding@resend.dev>', // Use your verified domain later
      to: 'johndavid.calimpong@gmail.com', // Your actual email
      subject: `New Contact Form Submission from ${validated.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validated.name}</p>
        <p><strong>Email:</strong> ${validated.email}</p>
        <p><strong>Company:</strong> ${validated.company || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${validated.message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Failed to send email' 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('Email sent successfully:', emailData);

    // Success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you! We will get back to you soon.' 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Zod validation errors
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          errors: error.errors,
          error: error.errors[0]?.message || 'Validation failed'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Generic error
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Something went wrong. Please try again.' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
