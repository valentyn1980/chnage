import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { source, fname, lname, fullphone, email } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "777vestg@gmail.com",
      pass: "qemp aucd mbca fxkn",
    },
  });

  const mailOptions: Mail.Options = {
    from: "777vestg@gmail.com",
    to: "777vestg@gmail.com",
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${fname} (${email})`,
    text: "message",
    html: `<p>Name surname: ${fname || ""} ${lname || ""}</p><p>email: ${
      email || ""
    }</p><p>telephone: ${fullphone || ""}</p><p>site: ${source || ""}</p>`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
