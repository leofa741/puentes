// lib/oauth2.ts
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

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
      user:"infoplataformaweb@gmail.com",
      clientId: "709090017620-0fjftvvqusj4n5tg48ehahv6krsdlioa.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: accessToken.token || ''
    }
  });

  return transporter;
};

export default createTransporter;
