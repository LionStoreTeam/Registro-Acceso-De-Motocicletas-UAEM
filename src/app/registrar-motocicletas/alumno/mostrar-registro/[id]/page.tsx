import { getRegistroAlumnoById } from "@/controllers/alumnos/action";
import { notFound } from "next/navigation";
import TablaEstudiantesRegistrados from "./TablaEstudiantesRegistrados";
import { useState } from "react";

const MostrarRegistroCompletoEstudiante = async ({
  params,
}: {
  params: { id: string };
}) => {
  const id = params.id;
  const estudiantes = await getRegistroAlumnoById(id);

  if (!estudiantes) {
    notFound();
  }
  return (
    <>
      <div className="bg-blue-950 flex flex-col justify-center items-center text-center h-[calc(100vh-4rem)] text-slate-200">
        <TablaEstudiantesRegistrados estudiantes={estudiantes} />
      </div>
    </>
  );
};

export default MostrarRegistroCompletoEstudiante;
