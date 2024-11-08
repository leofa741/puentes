// pages/api/send-email.ts
import createTransporter from '@/lib/oauth2';
import { NextApiRequest, NextApiResponse } from 'next';



type Data = {
  success: boolean;
  message?: string;
  error?: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    console.log(req.body);

    const mailOptions = {
      from:'infoplataformaweb@gmail.com',
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