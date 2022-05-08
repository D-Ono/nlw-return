import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: { 
      user: "90526f4dda89c3",
      pass: "303f09d428d379"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>", 
            to: "David Ono <onodavid07@gmail.com>",
            subject, 
            html: body,
        }); 
    }
}