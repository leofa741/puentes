import { sendResetEmail } from "@/lib/email";
import clientPromise from "@/lib/mongodb"; // Ajusta esto según tu configuración
import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "El correo es obligatorio." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("puentes"); // Cambia "puentech" por el nombre de tu base de datos
    const user = await db.collection("users").findOne({ email });

    console.log("Buscando usuario con correo:", user);

    console.log("Buscando usuario con correo:", email);

    if (!user) {
      return NextResponse.json(
        { message: "No se encontró un usuario con este correo." },
        { status: 404 }
      );
    }

    // Generar token de recuperación
    const resetToken = crypto.randomBytes(32).toString("hex");

    // Guardar el token en la base de datos (opcional, según tu lógica)
    await db.collection("passwordResets").insertOne({
      userId: user._id,
      resetToken,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 3600000), // 1 hora de expiración
    });

    // Construir el enlace de recuperación
    const resetLink = `${process.env.URL_FRONTEND}/auth/reset-password?token=${resetToken}`;

    // Enviar correo
    await sendResetEmail(email, resetLink);

    return NextResponse.json({
      message:
        "Correo enviado. Revisa tu bandeja de entrada para continuar con la recuperación.",
    });
  } catch (error) {
    console.error("Error en la solicitud de recuperación:", error);
    return NextResponse.json(
      { message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
