import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();

    const users = await db.collection('users').find().toArray();

    return NextResponse.json(
      users.map((user) => ({
        id: user._id.toString(),
        email: user.email,
        roles: user.roles,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        profile: user.profile,
      }))
    );
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    return NextResponse.json({ message: 'Error al obtener los usuarios' }, { status: 500 });
  }
}
