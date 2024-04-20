// import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";
// import { PrismaClient } from "@prisma/client";
// import type { NextApiRequest, NextApiResponse } from "next";

// const prisma = new PrismaClient();
// export async function POST(request: { json: () => any }) {
//   try {
//     const data = await request.json();

//     const userFound = await prisma.user.findUnique({
//       where: {
//         email: data.email,
//       },
//     });

//     if (userFound) {
//       return NextResponse.json(
//         {
//           message: "Email already in use",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     const usernameFound = await prisma.user.findUnique({
//       where: {
//         email: data.email,
//       },
//     });

//     if (usernameFound) {
//       return NextResponse.json(
//         {
//           message: "Username already in use",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     // console.log(data);
//     const hashedPassword = await bcrypt.hash(data.password, 10);
//     const newUser = await prisma.user.create({
//       data: {
//         username: data.username,
//         email: data.email,
//         password: hashedPassword,
//       },
//     });

//     const { password: _, ...User } = newUser;

//     return NextResponse.json(User);
//   } catch (error: any) {
//     return NextResponse.json(
//       {
//         message: error.message,
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = req.body;

    const userFound = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userFound) {
      return res.status(400).json({
        message: "Email already in use",
      });
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      },
    });

    // Omit the password field from the response
    const { password, ...userWithoutPassword } = newUser;

    return res.status(200).json(userWithoutPassword);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
