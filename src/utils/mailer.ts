import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: process.env.MAILER_SERVICE,
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_SECRET_KEY,
  },
});

interface MailOptions {
    from: string;
    to: string;
    subject: string;
    html: string;
}

export const sendResetEmail = async (email: string, resetLink: string): Promise<void> => {
    const mailOptions: MailOptions = {
        from: `"Soporte Puentech" <${process.env.MAILER_EMAIL}>`,
        to: email,
        subject: 'Recuperación de contraseña',
        html: `<p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
                     <a href="${resetLink}">${resetLink}</a>`,
    };

    await transporter.sendMail(mailOptions);
};
