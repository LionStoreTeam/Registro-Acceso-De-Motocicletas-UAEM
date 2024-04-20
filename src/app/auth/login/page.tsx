"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.error) {
      return setError(res.error as string);
    } else {
      router.push("/");
      router.refresh();
    }
  });
  return (
    <div className="">
      {/* Sección del Formulario Inicio de Sesión*/}
      <div className="min-h-screen flex flex-col justify-center sm:py-12 bg-gradient-to-tl from-blue-500 to-blue-900">
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
              Registro Vehicular
            </h1>
            <h1 className="text-[15px] sm:text-[25px]">UAEM</h1>
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
        <div className="flex justify-center items-center text-center my-5">
          <Link href="/">
            <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded-3xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 text-[15px] sm:text-[35px] md:text-[40px]">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#001660] rounded-3xl group-hover:bg-opacity-0">
                Volver a la pantalla de Inicio
              </span>
            </div>
          </Link>
        </div>
        {/*  */}
        <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold text-[#001660]">
                    Iniciar Sesión
                  </h1>
                </div>
                <form onSubmit={onSubmit}>
                  {error && (
                    <p className="bg-red-500 text-sm font-bold text-slate-100 p-3  mt-3 rounded-xl">
                      {error}
                    </p>
                  )}
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        {...register("email", {
                          required: {
                            value: true,
                            message: "El correo es requerido",
                          },
                        })}
                        autoComplete="off"
                        id="email"
                        name="email"
                        type="email"
                        className=" my-4 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-[#001660]"
                        placeholder="Correo electrónico"
                      />
                      {errors.email && (
                        <span className="text-red-500">
                          {errors.email.message?.toString()}
                        </span>
                      )}
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Correo Electrónico
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        {...register("password", {
                          required: {
                            value: true,
                            message: "La contraseña es requerida",
                          },
                        })}
                        autoComplete="off"
                        id="password"
                        name="password"
                        type="password"
                        className=" my-4 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-[#001660]"
                        placeholder="Contraseña"
                      />
                      {errors.password && (
                        <span className="text-red-500">
                          {errors.password.message?.toString()}
                        </span>
                      )}
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Contraseña
                      </label>
                    </div>
                    <div className="relative">
                      <button
                        type="submit"
                        className="w-full bg-[#001660] text-white rounded-xl px-2 py-1 hover:bg-blue-700 transition-all ease-in duration-75"
                      >
                        Ingresar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
