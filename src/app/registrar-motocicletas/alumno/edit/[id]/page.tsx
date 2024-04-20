//app\employee\edit\[id]\page.tsx
import { getRegistroAlumnoById } from "@/controllers/alumnos/action";
import EditarDatosEstudiantes from "@/models/alumno/components/editarDatos";
import { notFound } from "next/navigation";

const ActualizarDatosEstudiantes = async ({
  params,
}: {
  params: { id: string };
}) => {
  const id = params.id;
  const estudiantes = await getRegistroAlumnoById(id);
  //console.log(employee);

  if (!estudiantes) {
    notFound();
  }

  return (
    <>
      <EditarDatosEstudiantes estudiantes={estudiantes} />
    </>
  );
};

export default ActualizarDatosEstudiantes;
