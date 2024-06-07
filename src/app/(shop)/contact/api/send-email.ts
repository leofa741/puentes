// pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
  });

  const accessToken = await oauth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.SENDER_EMAIL_ADDRESS,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: accessToken.token || ''
    }
  });

  return transporter;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: process.env.SENDER_EMAIL_ADDRESS,
      to: 'infoplataformaweb@gmail.com', // Reemplaza con tu dirección de correo electrónico
      subject: `Nuevo mensaje de ${name}`,
      text: `
        Nombre: ${name}
        Correo Electrónico: ${email}
        Mensaje: ${message}
      `,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `
    };

    try {
      const transporter = await createTransporter();
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email enviado con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error al enviar el correo' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
