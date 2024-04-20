import { formatDate } from "@/lib/utils";
import { MaestrosAdministrativos } from "@prisma/client";
import React from "react";

const TablaMaestrosAdministrativosRegistrados = async ({
  maestrosAdministrativos,
}: {
  maestrosAdministrativos: MaestrosAdministrativos;
}) => {
  return (
    <div>
      <>
        <div className="bg-blue-950 flex flex-col justify-center items-center text-center h-[calc(100vh-4rem)] text-slate-200">
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">ID: </h1>
            <h1>{maestrosAdministrativos.id}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Matricula Escolar: </h1>
            <h1>{maestrosAdministrativos.matriculaAcademica} </h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Tipo de Usuario:</h1>
            <h1>{maestrosAdministrativos.tipoUsuario}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Nombre:</h1>
            <h1>{maestrosAdministrativos.nombre}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Apellido Paterno:</h1>
            <h1>{maestrosAdministrativos.apellidoPaterno}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Apellido Materno:</h1>
            <h1>{maestrosAdministrativos.apellidoMaterno}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Correo Institucional:</h1>
            <h1>{maestrosAdministrativos.correoInstitucional}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Dirección:</h1>
            <h1>{maestrosAdministrativos.direccion}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Estado:</h1>
            <h1>{maestrosAdministrativos.estado}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Municipio:</h1>
            <h1>{maestrosAdministrativos.municipio}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Código Postal:</h1>
            <h1>{maestrosAdministrativos.codigoPostal}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Matricula Vehicular:</h1>
            <h1>{maestrosAdministrativos.matriculaVehicular}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Modelo de Motocicleta:</h1>
            <h1>{maestrosAdministrativos.modelo}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Año de Registro de Motocicleta:</h1>
            <h1>{maestrosAdministrativos.anioRegistro}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Información Adicional:</h1>
            <h1>{maestrosAdministrativos.infoAdVehiculo}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Notas Descriptivas:</h1>
            <h1>{maestrosAdministrativos.notasDescriptivas}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">
              Fecha de Creación del Registro del Estudiante:
            </h1>
            <h1>{formatDate(maestrosAdministrativos.createdAt.toString())}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Actualización:</h1>
            <h1>{formatDate(maestrosAdministrativos.updatedAt.toString())}</h1>
          </div>
        </div>
      </>
    </div>
  );
};

export default TablaMaestrosAdministrativosRegistrados;
