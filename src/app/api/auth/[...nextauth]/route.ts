import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
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
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions) as never;

export { handler as GET, handler as POST };

// Acceso-Registro Motocicletas UAEM
