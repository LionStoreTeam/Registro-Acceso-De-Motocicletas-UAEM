import { formatDate } from "@/lib/utils";
import { Estudiantes } from "@prisma/client";

const TablaEstudiantesRegistrados = async ({
  estudiantes,
}: {
  estudiantes: Estudiantes;
}) => {
  return (
    <div>
      <>
        <div className="my-10">
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">ID: </h1>
            <h1>{estudiantes.id}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Matricula Escolar: </h1>
            <h1>{estudiantes.matriculaEscolar} </h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Tipo de Usuario:</h1>
            <h1>{estudiantes.tipoUsuario}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Nombre:</h1>
            <h1>{estudiantes.nombre}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Apellido Paterno:</h1>
            <h1>{estudiantes.apellidoPaterno}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Apellido Materno:</h1>
            <h1>{estudiantes.apellidoMaterno}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Correo Institucional:</h1>
            <h1>{estudiantes.correoInstitucional}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Dirección:</h1>
            <h1>{estudiantes.direccion}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Estado:</h1>
            <h1>{estudiantes.estado}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Municipio:</h1>
            <h1>{estudiantes.municipio}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Código Postal:</h1>
            <h1>{estudiantes.codigoPostal}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Matricula Vehicular:</h1>
            <h1>{estudiantes.matriculaVehicular}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Modelo de Motocicleta:</h1>
            <h1>{estudiantes.modelo}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Año de Registro de Motocicleta:</h1>
            <h1>{estudiantes.anioRegistro}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Información Adicional:</h1>
            <h1>{estudiantes.infoAdVehiculo}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Notas Descriptivas:</h1>
            <h1>{estudiantes.notasDescriptivas}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">
              Fecha de Creación del Registro del Estudiante:
            </h1>
            <h1>{formatDate(estudiantes.createdAt.toString())}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Actualización:</h1>
            <h1>{formatDate(estudiantes.updatedAt.toString())}</h1>
          </div>
        </div>
      </>
    </div>
  );
};

export default TablaEstudiantesRegistrados;
