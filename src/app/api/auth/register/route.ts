import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(request: Request) {
  try {
    const data = await request.json();

    const userFound = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userFound) {
      return NextResponse.json(
        {
          message: "Email already in use",
        },
        {
          status: 400,
        }
      );
    }

    const usernameFound = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (usernameFound) {
      return NextResponse.json(
        {
          message: "Username already in use",
        },
        {
          status: 400,
        }
      );
    }

    // console.log(data);
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      },
    });

    const { password: _, ...User } = newUser;

    return NextResponse.json(User);
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
