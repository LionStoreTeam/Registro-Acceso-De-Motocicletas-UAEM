import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return !session ? (
    // Si la sesión NO está iniciada se mostrará está porción de código
    <div className="bg-gradient-to-tl from-blue-600 to-blue-800">
      <div className="justify-center flex flex-row items-center text-center p-4 text-slate-100 w-full">
        <div className="h-[100px] sm:h-[150px] md:h-[200px]">
          <Image
            src="/venado1.png"
            width={200}
            height={200}
            alt="logo"
            priority
          />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h1 className="font-bold text-[20px] sm:text-[35px] md:text-[45px]">
            Bienvenido
          </h1>
          <h1 className="text-[15px] sm:text-[25px]">
            Para comenzar a registrar motocicletas debes iniciar sesión o
            registrarte.
          </h1>
        </div>
        <div className="h-[100px] sm:h-[150px] md:h-[200px]">
          <Image
            src="/venado2.png"
            width={200}
            height={200}
            alt="logo"
            priority
          />
        </div>
      </div>

      {/*  */}
      <div className="justify-center h-[calc(100vh-4rem)] flex flex-col gap-y-10 items-center md:gap-y-20">
        <div className="bg-cyan-100 p-1 rounded-3xl">
          <Link href="/auth/login">
            <div className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 rounded-3xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 text-[25px] sm:text-[55px]">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#001660] rounded-3xl group-hover:bg-opacity-0">
                Iniciar Sesión
              </span>
            </div>
          </Link>
        </div>
        {/*  */}
        <div className="bg-cyan-100 p-1 rounded-3xl">
          <Link href="/auth/register">
            <div className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-gray-900 rounded-3xl group bg-gradient-to-br from-blue-500 to-blue-700 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-[25px] sm:text-[55px]">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#001660] rounded-3xl group-hover:bg-opacity-0">
                Registrarse
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    // Si la sesión está iniciada se mostrará está porción de código
    <div className="bg-gradient-to-tl from-blue-600 to-blue-800">
      <div className="justify-center flex flex-row items-center text-center  p-4 text-slate-100 w-full">
        <div className="h-[100px] sm:h-[150px] md:h-[200px]">
          <Image
            src="/venado1.png"
            width={200}
            height={200}
            alt="logo"
            priority
          />
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h1 className="font-bold text-[20px] sm:text-[35px] md:text-[45px]">
            Bienvenido
          </h1>
          <h1 className="text-[15px] sm:text-[25px]">¿Que deseas hacer?</h1>
        </div>
        <div className="h-[100px] sm:h-[150px] md:h-[200px]">
          <Image
            src="/venado2.png"
            width={200}
            height={200}
            alt="logo"
            priority
          />
        </div>
      </div>

      {/*  */}
      <div className="justify-center flex flex-col p-10 gap-y-10 items-center md:gap-y-20">
        <div className="border-8 border-blue-300 justify-center items-center rounded-3xl p-6 flex flex-col gap-5 sm:flex-row">
          <div className="bg-cyan-100 p-1 rounded-3xl">
            <Link href="/registrar-motocicletas/alumno/nuevo-registro">
              <div className="relative inline-flex items-center justify-center text-center p-0.5 overflow-hidden text-gray-900 rounded-3xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 text-[15px] sm:text-[35px] md:text-[40px]">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#001660] rounded-3xl group-hover:bg-opacity-0">
                  Registrar Nueva Motocicleta Estudiante
                </span>
              </div>
            </Link>
          </div>
          <Link href="/registrar-motocicletas/alumno/nuevo-acceso">
            <div className="relative inline-flex items-center justify-center text-center p-0.5 overflow-hidden text-gray-900 rounded-3xl group bg-gradient-to-br from-green-500 to-green-600 group-hover:from-cyan-500 group-hover:to-cyan-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 text-[15px] sm:text-[35px] md:text-[40px]">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#001660] rounded-3xl group-hover:bg-opacity-0">
                Nuevo Acceso
              </span>
            </div>
          </Link>
        </div>

        <div className="border-8 border-blue-300 justify-center items-center rounded-3xl p-6 flex flex-col gap-5 sm:flex-row">
          <div className="bg-cyan-100 p-1 rounded-3xl">
            <Link href="/registrar-motocicletas/maestros-administrativos/nuevo-registro">
              <div className="relative inline-flex items-center justify-center text-center p-0.5 overflow-hidden text-gray-900 rounded-3xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 text-[15px] sm:text-[35px] md:text-[40px]">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#001660] rounded-3xl group-hover:bg-opacity-0">
                  Registrar Nueva Motocicleta Maestro/Administrativo
                </span>
              </div>
            </Link>
          </div>
          <Link href="/registrar-motocicletas/maestros-administrativos/nuevo-acceso">
            <div className="relative inline-flex items-center justify-center text-center p-0.5 overflow-hidden text-gray-900 rounded-3xl group bg-gradient-to-br from-green-500 to-green-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 text-[15px] sm:text-[35px] md:text-[40px]">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#001660] rounded-3xl group-hover:bg-opacity-0">
                Nuevo Acceso
              </span>
            </div>
          </Link>
        </div>
        <div className="border-8 border-blue-300 justify-center items-center rounded-3xl p-6 flex flex-col gap-5 sm:flex-row">
          <div className="bg-cyan-100 p-1 rounded-3xl">
            <Link href="/registrar-motocicletas/no-perteneciente-uaem/nuevo-registro">
              <div className="relative inline-flex items-center justify-center text-center p-0.5 overflow-hidden text-gray-900 rounded-3xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 text-[15px] sm:text-[35px] md:text-[40px]">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#001660] rounded-3xl group-hover:bg-opacity-0">
                  Registrar Nueva Motocicleta No Perteneciente UAEM
                </span>
              </div>
            </Link>
          </div>
          <Link href="/registrar-motocicletas/no-perteneciente-uaem/nuevo-acceso">
            <div className="relative inline-flex items-center justify-center text-center p-0.5 overflow-hidden text-gray-900 rounded-3xl group bg-gradient-to-br from-green-500 to-green-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 text-[15px] sm:text-[35px] md:text-[40px]">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#001660] rounded-3xl group-hover:bg-opacity-0">
                Nuevo Acceso
              </span>
            </div>
          </Link>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
