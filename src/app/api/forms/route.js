import { EmailTemplate } from '@/app/components/emailtemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req) {
  try {
    const body = await req.json();
     const{name,fullName,workEmail,company,phoneNumber,projectBudget,comments,email,subject,message}=req.body()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email aur message required hain" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: " Techwiz Technology <onboarding@resend.dev>", // 👈 yahan verified sender use karo
      to: ["zainabsiddiq2308@gmail.com"],
      subject: `📩 New Contact Form Submission from ${name}`,
      react: <EmailTemplate comments={comments}  
      subject={subject} name={name} company={company}
       phoneNumber={phoneNumber}  projectBudget={projectBudget}
        fullName={fullName} workEmail={workEmail} email={email} 
        phone={phone} message={message} />,
    });

    return NextResponse.json({ success: true, message:"send",data });
  } catch (error) {
    console.error("EMAIL SEND ERROR:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
