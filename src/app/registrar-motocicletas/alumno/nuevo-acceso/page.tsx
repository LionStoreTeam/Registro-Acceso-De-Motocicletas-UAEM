//app\employee\page.tsx
import Link from "next/link";
import { Suspense } from "react";
import { Spinner } from "@/components/spinner";
import BuscarEstudiantesRegistrados from "@/models/alumno/components/buscar";
import TablaDatosEstudiantesRegistrados from "@/models/alumno/components/tablaDatos";
import Image from "next/image";

const NuevoAccesoEstudiantes = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const query = searchParams?.query || "";
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="justify-center flex flex-row items-center text-center p-4 text-slate-100 w-full bg-gradient-to-tl from-blue-500 to-blue-900">
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
          <h1 className="text-[15px] sm:text-[25px]">Nuevo Acceso</h1>
          <h1 className="text-[15px] sm:text-[25px]">Estudiantes - UAEM</h1>
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
      <div className="flex flex-col gap-3 justify-center items-center text-center my-5 sm:flex-row">
        <Link href="/">
          <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded-3xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 text-[15px] sm:text-[15px] md:text-[20px]">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#001660] rounded-3xl group-hover:bg-opacity-0">
              Volver a la pantalla de Inicio
            </span>
          </div>
        </Link>
        <Link href="/registrar-motocicletas/alumno/nuevo-registro">
          <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded-3xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 text-[15px] sm:text-[15px] md:text-[20px]">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#001660] rounded-3xl group-hover:bg-opacity-0">
              Añadir un nuevo Estudiante
            </span>
          </div>
        </Link>
      </div>
      <div className="overflow-x-auto flex flex-col justify-center items-center text-center py-2 my-5">
        <BuscarEstudiantesRegistrados />
        <Suspense key={query} fallback={<Spinner />}>
          <TablaDatosEstudiantesRegistrados query={query} />
        </Suspense>
      </div>
    </div>
  );
};

export default NuevoAccesoEstudiantes;
