import { getRegistroAlumnoById } from "@/controllers/alumnos/action";
import { notFound } from "next/navigation";
import TablaMaestrosAdministrativosRegistrados from "./TablaMaestrosAdministrativosRegistrados";
import { getRegistroMaestroAdministrativoById } from "@/controllers/maestros-administrativos/action";

const MostrarRegistroCompletoEstudiante = async ({
  params,
}: {
  params: { id: string };
}) => {
  const id = params.id;
  const maestrosAdministrativosRegistrados =
    await getRegistroMaestroAdministrativoById(id);

  if (!maestrosAdministrativosRegistrados) {
    notFound();
  }
  return (
    <>
      <TablaMaestrosAdministrativosRegistrados
        maestrosAdministrativos={maestrosAdministrativosRegistrados}
      />
    </>
  );
};

export default MostrarRegistroCompletoEstudiante;
