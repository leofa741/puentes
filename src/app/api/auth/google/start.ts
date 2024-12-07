import { NextResponse } from 'next/server';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI!;
const SCOPE = 'openid email profile';

export async function GET() {
  const googleAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${encodeURIComponent(
    SCOPE
  )}`;

  return NextResponse.redirect(googleAuthURL);
}
