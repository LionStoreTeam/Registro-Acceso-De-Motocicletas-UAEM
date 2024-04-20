//components\tabledata.tsx
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { DeleteButtonNoPertenecienteUAEM } from "@/models/no-perteneciente-uaem/components/borrar";
import { getDatosRegistroNoPertenecienteUAEMBuscador } from "@/controllers/no-perteneciente-uaem/action";

const TablaDatosNoPertenecientesUAEMRegistrados = async ({
  query: queryNoPertenecientesUAEM,
}: {
  query: string;
}) => {
  const usuarioRegistradoNoPertenecienteUAEM =
    await getDatosRegistroNoPertenecienteUAEMBuscador(
      queryNoPertenecientesUAEM
    );
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
        <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
          <tr>
            <th className="py-3 px-6">#</th>
            <th className="py-3 px-6">Matricula Asignada</th>
            <th className="py-3 px-6">Correo</th>
            <th className="py-3 px-6">Matricula Vehicular</th>
            <th className="py-3 px-6 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarioRegistradoNoPertenecienteUAEM.map((rs, index) => (
            <tr key={rs.id} className="bg-blue-500 border-b border-blue-400">
              <td className="py-4 px-6">{index + 1}</td>
              <td className="py-4 px-6">{rs.matriculaAsignada}</td>
              <td className="py-4 px-6">{rs.correoGeneral}</td>
              <td className="py-4 px-6">{rs.matriculaVehicular}</td>
              {/* <td className="py-4 px-6">
                {formatDate(rs.createdAt.toString())}
              </td> */}
              <td className="flex-col justify-between gap-2 text-center py-6 px-6">
                <div className="">
                  <Link
                    href=""
                    className="bg-green-500 p-3 rounded-xl text-[15px] font-bold"
                  >
                    PERMITIR EL ACCESO
                  </Link>
                </div>
                <div className="flex justify-between gap-2 text-center py-4 px-6 mt-2">
                  <Link
                    href={`/registrar-motocicletas/no-perteneciente-uaem/mostrar-registro/${rs.id}`}
                    className="bg-cyan-900 p-3 rounded-xl text-[15px] font-bold"
                  >
                    Ver
                  </Link>
                  <Link
                    href={`/registrar-motocicletas/no-perteneciente-uaem/edit/${rs.id}`}
                    className="bg-blue-800 p-3 rounded-xl text-[15px] font-bold"
                  >
                    EDITAR
                  </Link>
                  <DeleteButtonNoPertenecienteUAEM id={rs.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaDatosNoPertenecientesUAEMRegistrados;
