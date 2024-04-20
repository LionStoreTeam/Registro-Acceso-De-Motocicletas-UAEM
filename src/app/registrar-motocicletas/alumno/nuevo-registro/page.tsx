"use client";
import { useFormState } from "react-dom";
import React, { useState } from "react";
import Image from "next/image";
import { saveRegistroAlumno } from "@/controllers/alumnos/action";
import estados from "@/models/estados";
import Link from "next/link";

const RegistroAlumnosMotocicletas = () => {
  const [state, formAction] = useFormState(saveRegistroAlumno, null);

  //Para seleccionar el Estado y Municipio
  const [estadoSeleccionado, setEstadoSeleccionado] = useState<string>("");
  const [municipioSeleccionado, setMunicipioSeleccionado] =
    useState<string>("");
  const handleEstadoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const estado = event.target.value;
    setEstadoSeleccionado(estado);
    setMunicipioSeleccionado(""); // Limpiar municipio seleccionado al cambiar de estado
  };

  const handleMunicipioChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const municipio = event.target.value;
    setMunicipioSeleccionado(municipio);
  };
  // const correoCaracteres =
  // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <div className="bg-gradient-to-tl from-blue-500 to-blue-900">
      <main className="p-4 grid grid-cols-1 justify-center items-center">
        <div className="justify-center flex flex-row items-center text-center p-4 text-slate-100 w-full">
          <div className="h-[100px] sm:h-[150px] md:h-[200px]">
            <Image
              src="/venado1.png"
              width={200}
              height={200}
              alt="logo"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 p-2">
            <h1 className="font-bold text-[20px] sm:text-[35px] md:text-[45px]">
              Registro Vehicular
            </h1>
            <h1 className="text-[15px] sm:text-[25px]">Estudiantes - UAEM</h1>
          </div>
          <div className="h-[100px] sm:h-[150px] md:h-[200px]">
            <Image
              src="/venado2.png"
              width={200}
              height={200}
              alt="logo"
              priority
            />
          </div>
        </div>
        <div className="flex justify-center items-center text-center my-5">
          <Link href="/">
            <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded-3xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 text-[15px] sm:text-[35px] md:text-[40px]">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#001660] rounded-3xl group-hover:bg-opacity-0">
                Volver a la pantalla de Inicio
              </span>
            </div>
          </Link>
        </div>
        {/*  */}
        <section className="py-1">
          <div className="bg-blue-200 p-4 rounded-xl w-full lg:w-8/12 px-4 mx-auto mt-6 ">
            <div className="bg-white relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-blueGray-100 border-0">
              <div className="rounded-t-xl bg-slate-200 mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">
                    AÑADIR NUEVO REGISTRO - ESTUDIANTE
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form action={formAction}>
                  <div className=" flex flex-col justify-between p-3 mb-5 sm:flex-row">
                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase text-center pb-2">
                      Información del Visitante
                    </h6>
                    <button className="bg-[#001660] text-white active:bg-pink-600 font-bold uppercase text-xs p-4 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150">
                      GUARDAR
                    </button>
                  </div>

                  <hr className="bg-blue-200 m-4 mb-4 h-1" />
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="matriculaEscolar"
                        >
                          Matricula Escolar
                        </label>
                        <input
                          minLength={8}
                          maxLength={8}
                          type="tel"
                          name="matriculaEscolar"
                          id="matriculaEscolar"
                          pattern="[0-9]+"
                          placeholder="Matricula: 12345678"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <div
                          id="name-error"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          <p className="mt-2 text-sm text-red-500">
                            {state?.Error?.matriculaEscolar}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="tipoUsuario"
                        >
                          Tipo de Usuario
                        </label>
                        <select
                          autoComplete="off"
                          name="tipoUsuario"
                          id="tipoUsuario"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        >
                          <option value="Estudiante UAEM">
                            Estudiante UAEM
                          </option>
                        </select>

                        <div
                          id="name-error"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          <p className="mt-2 text-sm text-red-500">
                            {state?.Error?.tipoUsuario}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="nombre"
                        >
                          Nombre(s)
                        </label>
                        <input
                          maxLength={20}
                          autoComplete="off"
                          type="text"
                          name="nombre"
                          id="nombre"
                          placeholder="Nombre(s)"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <div
                          id="name-error"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          <p className="mt-2 text-sm text-red-500">
                            {state?.Error?.nombre}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="correoInstitucional"
                        >
                          Correo Institucional
                        </label>
                        <input
                          autoComplete="off"
                          type="email"
                          name="correoInstitucional"
                          id="correoInstitucional"
                          placeholder="correo@uaem.edu.mx"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <div
                          id="name-error"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          <p className="mt-2 text-sm text-red-500">
                            {state?.Error?.correoInstitucional}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="apellidoPaterno"
                        >
                          Primer Apellido
                        </label>
                        <input
                          maxLength={30}
                          autoComplete="off"
                          type="text"
                          name="apellidoPaterno"
                          id="apellidoPaterno"
                          placeholder="Apellido Paterno"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <div
                          id="name-error"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          <p className="mt-2 text-sm text-red-500">
                            {state?.Error?.apellidoPaterno}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="apellidoMaterno"
                        >
                          Segundo Apellido
                        </label>
                        <input
                          maxLength={30}
                          autoComplete="off"
                          type="text"
                          name="apellidoMaterno"
                          id="apellidoMaterno"
                          placeholder="Apellido Materno"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <div
                          id="name-error"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          <p className="mt-2 text-sm text-red-500">
                            {state?.Error?.apellidoMaterno}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Información de contacto
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="direccion"
                        >
                          Dirección
                        </label>
                        <input
                          maxLength={50}
                          autoComplete="off"
                          type="text"
                          name="direccion"
                          id="direccion"
                          placeholder="Av. Universidad, Colonia Chamilpa #000"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <div
                          id="name-error"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          <p className="mt-2 text-sm text-red-500">
                            {state?.Error?.direccion}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="estado"
                        >
                          Estado
                        </label>
                        <select
                          autoComplete="off"
                          id="estado"
                          name="estado"
                          value={estadoSeleccionado}
                          onChange={handleEstadoChange}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        >
                          <option value="">Selecciona un estado</option>
                          {Object.keys(estados).map((estado) => (
                            <option key={estado} value={estado}>
                              {estado}
                            </option>
                          ))}
                        </select>
                        <div
                          id="name-error"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          <p className="mt-2 text-sm text-red-500">
                            {state?.Error?.estado}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="municipio"
                        >
                          Municipio
                        </label>
                        <select
                          autoComplete="off"
                          name="municipio"
                          id="municipio"
                          value={municipioSeleccionado}
                          onChange={handleMunicipioChange}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        >
                          <option value="">Selecciona un municipio</option>
                          {estadoSeleccionado &&
                            estados[estadoSeleccionado].map((municipio) => (
                              <option key={municipio} value={municipio}>
                                {municipio}
                              </option>
                            ))}
                        </select>

                        <div
                          id="name-error"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          <p className="mt-2 text-sm text-red-500">
                            {state?.Error?.municipio}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="codigoPostal"
                        >
                          Código Postal
                        </label>
                        <input
                          minLength={5}
                          maxLength={5}
                          autoComplete="off"
                          type="tel"
                          name="codigoPostal"
                          id="codigoPostal"
                          pattern="[0-9]+"
                          placeholder="00000"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <div
                          id="name-error"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          <p className="mt-2 text-sm text-red-500">
                            {state?.Error?.codigoPostal}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Información del Vehículo a Registrar
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="matriculaVehicular"
                        >
                          Matrícula Vehícular
                        </label>
                        <input
                          minLength={7}
                          maxLength={8}
                          autoComplete="off"
                          type="tel"
                          name="matriculaVehicular"
                          id="matriculaVehicular"
                          placeholder="Matrícula Vehicular"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <div
                          id="name-error"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          <p className="mt-2 text-sm text-red-500">
                            {state?.Error?.matriculaVehicular}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="modelo"
                        >
                          Modelo
                        </label>
                        <input
                          maxLength={20}
                          autoComplete="off"
                          type="text"
                          name="modelo"
                          id="modelo"
                          placeholder="ITALIKA Vort-X"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <div
                          id="name-error"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          <p className="mt-2 text-sm text-red-500">
                            {state?.Error?.modelo}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="anioRegistro"
                        >
                          Año de Registro
                        </label>
                        <input
                          autoComplete="off"
                          type="date"
                          name="anioRegistro"
                          id="anioRegistro"
                          placeholder="00000"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <div
                          id="name-error"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          <p className="mt-2 text-sm text-red-500">
                            {state?.Error?.anioRegistro}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="infoAdVehiculo"
                        >
                          Información adicional del Vehículo
                        </label>
                        <input
                          maxLength={100}
                          autoComplete="off"
                          type="text"
                          name="infoAdVehiculo"
                          id="infoAdVehiculo"
                          placeholder="Motocicleta ITALIKA color rojo con calcomanía amarilla en el tanque."
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        <div
                          id="name-error"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          <p className="mt-2 text-sm text-red-500">
                            {state?.Error?.infoAdVehiculo}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />

                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Información Adicional
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="notasDescriptivas"
                        >
                          Notas descriptivas
                        </label>
                        <input
                          maxLength={100}
                          autoComplete="off"
                          type="text"
                          name="notasDescriptivas"
                          id="notasDescriptivas"
                          placeholder="Si es necesario puedes agregar información adicional aquí."
                          className="resize-none border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        ></input>
                        <div
                          id="name-error"
                          aria-live="polite"
                          aria-atomic="true"
                        >
                          <p className="mt-2 text-sm text-red-500">
                            {state?.Error?.notasDescriptivas}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-center items-center text-center p-3 mb-5 sm:flex-row">
                    <button className="bg-[#001660] text-white active:bg-pink-600 font-bold uppercase text-xs p-4 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150">
                      GUARDAR
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <footer className="relative pt-8 pb-6 mt-2">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                  <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                      <h3>UAEM © 2024.</h3>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RegistroAlumnosMotocicletas;
