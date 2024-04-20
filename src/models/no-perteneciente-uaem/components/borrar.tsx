//components\delete.tsx

import { deleteRegistroNoPertenecienteUAEM } from "@/controllers/no-perteneciente-uaem/action";

export const DeleteButtonNoPertenecienteUAEM = ({ id }: { id: string }) => {
  const EliminarRegistroDeNoPertenecienteUAEM =
    deleteRegistroNoPertenecienteUAEM.bind(null, id);
  return (
    <form action={EliminarRegistroDeNoPertenecienteUAEM}>
      <button className="bg-red-700 p-3 rounded-xl text-[15px] font-bold">
        BORRAR
      </button>
    </form>
  );
};
