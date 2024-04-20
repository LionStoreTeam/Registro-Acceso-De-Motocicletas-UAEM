//app\employee\edit\[id]\page.tsx
import { getRegistroMaestroAdministrativoById } from "@/controllers/maestros-administrativos/action";
import EditarDatosMaestroAdministrativo from "@/models/maestros-administrativos/components/editarDatos";
import { notFound } from "next/navigation";

const ActualizarDatosMaestroAdministrativo = async ({
  params,
}: {
  params: { id: string };
}) => {
  const id = params.id;
  const maestrosAdministrativos = await getRegistroMaestroAdministrativoById(
    id
  );

  if (!maestrosAdministrativos) {
    notFound();
  }

  return (
    <>
      <EditarDatosMaestroAdministrativo
        maestrosAdministrativos={maestrosAdministrativos}
      />
    </>
  );
};

export default ActualizarDatosMaestroAdministrativo;
