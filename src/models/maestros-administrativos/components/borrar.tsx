//components\delete.tsx

import { deleteRegistroMaestroAdministrativo } from "@/controllers/maestros-administrativos/action";

export const DeleteButtonMaestroAdministrativo = ({ id }: { id: string }) => {
  const EliminarRegistroDeMaestroAdministrativo =
    deleteRegistroMaestroAdministrativo.bind(null, id);
  return (
    <form action={EliminarRegistroDeMaestroAdministrativo}>
      <button className="bg-red-700 p-3 rounded-xl text-[15px] font-bold">
        BORRAR
      </button>
    </form>
  );
};
