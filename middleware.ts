import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: Request) {
  const token = request.headers.get('Authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    if (Array.isArray(payload.roles) && payload.roles.includes('admin')) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/', request.url));
  } catch (error) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

// Configuración para proteger las rutas admin
export const config = {
  matcher: ['/admin/:path*'],
};
