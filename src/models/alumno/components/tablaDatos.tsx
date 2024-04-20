//components\tabledata.tsx
import Link from "next/link";
import { getDatosRegistroAlumnoBuscador } from "@/controllers/alumnos/action";
import { DeleteButtonEstudiantes } from "@/models/alumno/components/borrar";

const TablaDatosEstudiantesRegistrados = async ({
  query,
}: {
  query: string;
}) => {
  const usuarioRegistradoEstudiante = await getDatosRegistroAlumnoBuscador(
    query
  );
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
          <tr>
            <th className="py-3 px-6">#</th>
            <th className="py-3 px-6">Matricula Escolar</th>
            <th className="py-3 px-6">Correo</th>
            <th className="py-3 px-6">Matricula Vehicular</th>
            <th className="py-3 px-6 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarioRegistradoEstudiante.map((rs, index) => (
            <tr key={rs.id} className="bg-blue-500 border-b border-blue-400">
              <td className="py-4 px-6">{index + 1}</td>
              <td className="py-4 px-6">{rs.matriculaEscolar}</td>
              <td className="py-4 px-6">{rs.correoInstitucional}</td>
              <td className="py-4 px-6">{rs.matriculaVehicular}</td>
              <td className="flex-col justify-between gap-2 text-center py-6 px-6">
                <div className="">
                  <button className="bg-green-500 p-3 rounded-xl text-[15px] font-bold">
                    PERMITIR EL ACCESO
                  </button>
                </div>
                <div className="flex justify-between gap-2 text-center py-4 px-6 mt-2">
                  <Link
                    href={`/registrar-motocicletas/alumno/mostrar-registro/${rs.id}`}
                    className="bg-cyan-900 p-3 rounded-xl text-[15px] font-bold"
                  >
                    Ver
                  </Link>
                  <Link
                    href={`/registrar-motocicletas/alumno/edit/${rs.id}`}
                    className="bg-blue-800 p-3 rounded-xl text-[15px] font-bold"
                  >
                    EDITAR
                  </Link>
                  <DeleteButtonEstudiantes id={rs.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatosEstudiantesRegistrados;
