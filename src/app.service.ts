import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer'
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AppService {
  sendEmails() {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { 
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    const mailOptions: nodemailer.SendMailOptions = {
      from: 'guicabralprowork@gmail.com',
      to: 'cabralguilherme412@gmail.com',
      subject: 'Envio de E-Mail pelo NestJS',
      text: 'Tabela de exemplo teste 01/02/2024',
      html: '<table><thead><tr><th>ID</th><th>Nome</th><th>Email</th></tr></thead><tbody><tr><td>1</td><td>João</td><td>joao@example.com</td></tr><tr><td>2</td><td>Maria</td><td>maria@example.com</td></tr><tr><td>3</td><td>Carlos</td><td>carlos@example.com</td></tr></tbody></table>'
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email enviado: ' + info.response);
      }
    })
  }
}
