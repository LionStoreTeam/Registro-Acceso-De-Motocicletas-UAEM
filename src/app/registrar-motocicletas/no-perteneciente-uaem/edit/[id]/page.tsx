//app\employee\edit\[id]\page.tsx
import { getRegistroNoPertenecienteUAEMById } from "@/controllers/no-perteneciente-uaem/action";
import EditarDatosNoPertenecienteUAEM from "@/models/no-perteneciente-uaem/components/editarDatos";
import { notFound } from "next/navigation";

const ActualizarDatosNoPertenecienteUAEM = async ({
  params,
}: {
  params: { id: string };
}) => {
  const id = params.id;
  const noPertenecientesUAEM = await getRegistroNoPertenecienteUAEMById(id);

  if (!noPertenecientesUAEM) {
    notFound();
  }

  return (
    <>
      <EditarDatosNoPertenecienteUAEM
        noPertenecientesUAEM={noPertenecientesUAEM}
      />
    </>
  );
};

export default ActualizarDatosNoPertenecienteUAEM;
