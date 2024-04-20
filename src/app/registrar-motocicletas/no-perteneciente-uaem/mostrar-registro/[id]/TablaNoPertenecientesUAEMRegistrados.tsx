import { formatDate } from "@/lib/utils";
import { NoPertenecientesUAEM } from "@prisma/client";
import React from "react";

const TablaNoPertenecientesUAEMRegistrados = async ({
  noPertenecientesUAEM,
}: {
  noPertenecientesUAEM: NoPertenecientesUAEM;
}) => {
  return (
    <div>
      <>
        <div className="bg-blue-950 flex flex-col justify-center items-center text-center h-[calc(100vh-4rem)] text-slate-200">
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">ID: </h1>
            <h1>{noPertenecientesUAEM.id}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Matricula Escolar: </h1>
            <h1>{noPertenecientesUAEM.matriculaAsignada} </h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Tipo de Usuario:</h1>
            <h1>{noPertenecientesUAEM.tipoUsuario}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Nombre:</h1>
            <h1>{noPertenecientesUAEM.nombre}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Apellido Paterno:</h1>
            <h1>{noPertenecientesUAEM.apellidoPaterno}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Apellido Materno:</h1>
            <h1>{noPertenecientesUAEM.apellidoMaterno}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Correo Institucional:</h1>
            <h1>{noPertenecientesUAEM.correoGeneral}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Dirección:</h1>
            <h1>{noPertenecientesUAEM.direccion}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Estado:</h1>
            <h1>{noPertenecientesUAEM.estado}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Municipio:</h1>
            <h1>{noPertenecientesUAEM.municipio}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Código Postal:</h1>
            <h1>{noPertenecientesUAEM.codigoPostal}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Matricula Vehicular:</h1>
            <h1>{noPertenecientesUAEM.matriculaVehicular}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Modelo de Motocicleta:</h1>
            <h1>{noPertenecientesUAEM.modelo}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Año de Registro de Motocicleta:</h1>
            <h1>{noPertenecientesUAEM.anioRegistro}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Información Adicional:</h1>
            <h1>{noPertenecientesUAEM.infoAdVehiculo}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Notas Descriptivas:</h1>
            <h1>{noPertenecientesUAEM.notasDescriptivas}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">
              Fecha de Creación del Registro del Estudiante:
            </h1>
            <h1>{formatDate(noPertenecientesUAEM.createdAt.toString())}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <h1 className="text-cyan-500">Actualización:</h1>
            <h1>{formatDate(noPertenecientesUAEM.updatedAt.toString())}</h1>
          </div>
        </div>
      </>
    </div>
  );
};

export default TablaNoPertenecientesUAEMRegistrados;
