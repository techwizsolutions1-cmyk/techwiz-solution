import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("📩 Incoming form data:", body);

    const {
      name,
      fullName,
      workEmail,
      company,
      phoneNumber,
      projectBudget,
      comments,
      email,
      subject,
      message,
    } = body;

   

    // ✅ Simple HTML template (works without React render)
    const html = `
      <div style="font-family: Arial, sans-serif; color: #333">
        <h2>📩 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "—"}</p>
        <p><strong>Message:</strong> ${message}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        ${phoneNumber ? `<p><strong>Phone:</strong> ${phoneNumber}</p>` : ""}
        ${projectBudget ? `<p><strong>Budget:</strong> ${projectBudget}</p>` : ""}
        ${comments ? `<p><strong>Comments:</strong> ${comments}</p>` : ""}
      </div>
    `;

    const data = await resend.emails.send({
      from: "Techwiz Technology <info@techwizpk.com>", // verified sender
      to: ["info@techwizpk.com"],
      subject: `📩 New Contact Form Submission from ${name}`,
      html, // ✅ use HTML body instead of React
    });

    console.log("✅ Email sent successfully:", data);
    return NextResponse.json({ success: true, message: "Email sent!", data });
  } catch (error) {
    console.error("🚨 EMAIL SEND ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Unknown error",
        stack: error.stack || null,
      },
      { status: 500 }
    );
  }
}
