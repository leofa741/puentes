// Ruta: src/app/api/auth/logout/route.ts

import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  // Elimina la cookie del token
  const response = NextResponse.json({ message: 'Logout exitoso' });
  response.headers.set(
    'Set-Cookie',
    serialize('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 0, // Inmediatamente expira la cookie
    })
  );
  return response;
}
