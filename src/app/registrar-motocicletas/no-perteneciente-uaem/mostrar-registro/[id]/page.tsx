import { getRegistroNoPertenecienteUAEMById } from "@/controllers/no-perteneciente-uaem/action";
import { notFound } from "next/navigation";
import TablaNoPertenecientesUAEMRegistrados from "./TablaNoPertenecientesUAEMRegistrados";

const MostrarRegistroCompletoNoPertenecientesUAEM = async ({
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
      <TablaNoPertenecientesUAEMRegistrados
        noPertenecientesUAEM={noPertenecientesUAEM}
      />
    </>
  );
};

export default MostrarRegistroCompletoNoPertenecientesUAEM;
