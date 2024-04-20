import { z } from "zod";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "someemail@email.com",
          autocomplete: "off",
        },
        password: { label: "Password", type: "password", autocomplete: "off" },
      },
      async authorize(
        credentials: any,
        req: any
      ): Promise<{ id: string; username: string; email: string }> {
        const userFound = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!userFound) throw new Error("Usuario no encontrado");

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!passwordMatch) throw new Error("Contraseña incorrecta");

        return {
          id: userFound.id.toString(),
          username: userFound.username,
          email: userFound.email,
        };
      },
    }),
  ],
  // callbacks: {
  //   async session(session, Usuario) {
  //     session.Usuario = Usuario;
  //     return session;
  //   },
  // },
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
