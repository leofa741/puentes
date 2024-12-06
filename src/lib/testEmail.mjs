import { sendResetEmail } from './email';

(async () => {
  try {
    await sendResetEmail(
      'correo-destino@gmail.com',
      'http://localhost:3000/auth/reset-password?token=test-token'
    );
    console.log('Correo enviado exitosamente');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
})();
