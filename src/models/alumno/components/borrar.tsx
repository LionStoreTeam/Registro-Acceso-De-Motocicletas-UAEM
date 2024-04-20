//components\delete.tsx
import { deleteRegistroAlumno } from "@/controllers/alumnos/action";

export const DeleteButtonEstudiantes = ({ id }: { id: string }) => {
  const EliminarRegistroDeAlumno = deleteRegistroAlumno.bind(null, id);
  return (
    <form action={EliminarRegistroDeAlumno}>
      <button className="bg-red-900 p-3 rounded-xl text-[15px] font-bold">
        BORRAR
      </button>
    </form>
  );
};
