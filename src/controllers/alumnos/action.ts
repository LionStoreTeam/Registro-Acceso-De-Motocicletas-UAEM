//lib\action.ts
"use server";

import { z } from "zod"; //npm i zod https://www.npmjs.com/package/zod
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

const RegistroAlumnoSchema = z.object({
  matriculaEscolar: z.string().min(8),
  tipoUsuario: z.string(),
  nombre: z.string().min(3).max(20),
  apellidoPaterno: z.string().min(3).max(30),
  apellidoMaterno: z.string().min(3).max(30),
  correoInstitucional: z.string().min(12),
  direccion: z.string().min(10).max(50),
  estado: z.string().min(1),
  municipio: z.string().min(1),
  codigoPostal: z.string().min(5).max(5),
  matriculaVehicular: z.string().min(7).max(8),
  modelo: z.string().min(6).max(20),
  anioRegistro: z.string().min(6),
  infoAdVehiculo: z.string().max(100),
  notasDescriptivas: z.string().max(100),
});

export const saveRegistroAlumno = async (prevSate: any, formData: FormData) => {
  const validatedFields = RegistroAlumnoSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.estudiantes.create({
      data: {
        matriculaEscolar: validatedFields.data.matriculaEscolar,
        tipoUsuario: validatedFields.data.tipoUsuario,
        nombre: validatedFields.data.nombre,
        apellidoPaterno: validatedFields.data.apellidoPaterno,
        apellidoMaterno: validatedFields.data.apellidoMaterno,
        correoInstitucional: validatedFields.data.correoInstitucional,
        direccion: validatedFields.data.direccion,
        estado: validatedFields.data.estado,
        municipio: validatedFields.data.municipio,
        codigoPostal: validatedFields.data.codigoPostal,
        matriculaVehicular: validatedFields.data.matriculaVehicular,
        modelo: validatedFields.data.modelo,
        anioRegistro: validatedFields.data.anioRegistro,
        infoAdVehiculo: validatedFields.data.infoAdVehiculo,
        notasDescriptivas: validatedFields.data.notasDescriptivas,
      },
    });
  } catch (error) {
    return { message: "Error al guardar los datos" };
  }

  revalidatePath("/registrar-motocicletas/alumno/nuevo-acceso");
  redirect("/registrar-motocicletas/alumno/nuevo-acceso");
};

export const getDatosRegistroAlumno = async (query: string) => {
  try {
    const RegistroAlumno = await prisma.estudiantes.findMany({
      select: {
        id: true,
        matriculaEscolar: true,
        tipoUsuario: true,
        nombre: true,
        apellidoPaterno: true,
        apellidoMaterno: true,
        correoInstitucional: true,
        direccion: true,
        estado: true,
        municipio: true,
        codigoPostal: true,
        matriculaVehicular: true,
        modelo: true,
        anioRegistro: true,
        infoAdVehiculo: true,
        notasDescriptivas: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return RegistroAlumno;
  } catch (error) {
    throw new Error("Error al cargar los datos del alumno");
  }
};

export const getDatosRegistroAlumnoBuscador = async (query: string) => {
  try {
    const RegistroAlumnoBuscador = await prisma.estudiantes.findMany({
      where: {
        matriculaEscolar: {
          contains: query,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return RegistroAlumnoBuscador;
  } catch (error) {
    throw new Error("Error al buscar el registro del alumno");
  }
};

export const getDataForExample = async (id: string) => {
  try {
    const UsuarioEncargado = await prisma.estudiantes.findUnique({
      where: {
        id,
      },
    });
    return UsuarioEncargado;
  } catch (error) {
    throw new Error("Failed to fetch UsuarioEncargado data");
  }
};

export const getRegistroAlumnoById = async (id: string) => {
  try {
    const RegistroAlumno = await prisma.estudiantes.findUnique({
      where: { id },
    });
    return RegistroAlumno;
  } catch (error) {
    throw new Error("Error al obtener los datos del alumno");
  }
};

export const updateRegistroAlumno = async (
  id: string,
  prevSate: any,
  formData: FormData
) => {
  const validatedFields = RegistroAlumnoSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.estudiantes.update({
      data: {
        matriculaEscolar: validatedFields.data.matriculaEscolar,
        tipoUsuario: validatedFields.data.tipoUsuario,
        nombre: validatedFields.data.nombre,
        apellidoPaterno: validatedFields.data.apellidoPaterno,
        apellidoMaterno: validatedFields.data.apellidoMaterno,
        correoInstitucional: validatedFields.data.correoInstitucional,
        direccion: validatedFields.data.direccion,
        estado: validatedFields.data.estado,
        municipio: validatedFields.data.municipio,
        codigoPostal: validatedFields.data.codigoPostal,
        matriculaVehicular: validatedFields.data.matriculaVehicular,
        modelo: validatedFields.data.modelo,
        anioRegistro: validatedFields.data.anioRegistro,
        infoAdVehiculo: validatedFields.data.infoAdVehiculo,
        notasDescriptivas: validatedFields.data.notasDescriptivas,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Error al actualizar los datos" };
  }

  revalidatePath("/");
  redirect("/");
};

export const deleteRegistroAlumno = async (id: string) => {
  try {
    await prisma.estudiantes.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Error al eliminar el registro del alumno" };
  }

  revalidatePath("/employee");
};
// //lib\action.ts
// "use server";

// import { z } from "zod"; //npm i zod https://www.npmjs.com/package/zod
// import { prisma } from "@/lib/prisma";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

// const UsuarioEncargadoSchema = z.object({
//   matriculaEscolar: z.string().min(8),
//   nombre: z.string().min(3),
//   apellidoPaterno: z.string().min(3),
//   apellidoMaterno: z.string().min(3),
//   correoInstitucional: z.string().min(6),
//   // direccion: z.string().min(6),
//   // ciudad: z.string().min(6),
//   // pais: z.string().min(6),
//   // codigoPostal: z.string().min(5),
//   // matriculaVehicular: z.string().min(6),
//   // modelo: z.string().min(6),
//   // anioRegistro: z.string(),
//   // infoAdVehiculo: z.string().min(6),
//   // notasDescriptivas: z.string().min(6),
// });

// export const saveUsuarioEncargado = async (
//   prevSate: any,
//   formData: FormData
// ) => {
//   const validatedFields = UsuarioEncargadoSchema.safeParse(
//     Object.fromEntries(formData.entries())
//   );

//   if (!validatedFields.success) {
//     return {
//       Error: validatedFields.error.flatten().fieldErrors,
//     };
//   }

//   try {
//     await prisma.estudiantes.create({
//       data: {
//         matriculaEscolar: validatedFields.data.matriculaEscolar,
//         nombre: validatedFields.data.nombre,
//         apellidoPaterno: validatedFields.data.apellidoPaterno,
//         apellidoMaterno: validatedFields.data.apellidoMaterno,
//         correoInstitucional: validatedFields.data.correoInstitucional,
//         // direccion: validatedFields.data.direccion,
//         // ciudad: validatedFields.data.ciudad,
//         // pais: validatedFields.data.pais,
//         // codigoPostal: validatedFields.data.codigoPostal,
//         // matriculaVehicular: validatedFields.data.matriculaVehicular,
//         // modelo: validatedFields.data.modelo,
//         // anioRegistro: validatedFields.data.anioRegistro,
//         // infoAdVehiculo: validatedFields.data.infoAdVehiculo,
//         // notasDescriptivas: validatedFields.data.notasDescriptivas,
//       },
//     });
//   } catch (error) {
//     return { message: "Failed to create new UsuarioEncargado" };
//   }

//   revalidatePath("/employee");
//   redirect("/employee");
// };

// export const getUsuarioEncargado = async (query: string) => {
//   try {
//     const UsuarioEncargado = await prisma.estudiantes.findMany({
//       select: {
//         id: true,
//         matriculaEscolar: true,
//         nombre: true,
//         apellidoPaterno: true,
//         apellidoMaterno: true,
//         correoInstitucional: true,
//         // direccion: true,
//         // ciudad: true,
//         // pais: true,
//         // codigoPostal: true,
//         // matriculaVehicular: true,
//         // modelo: true,
//         // anioRegistro: true,
//         // infoAdVehiculo: true,
//         // notasDescriptivas: true,
//         // createdAt: true,
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     return UsuarioEncargado;
//   } catch (error) {
//     throw new Error("Failed to fetch UsuarioEncargado data");
//   }
// };

// export const getData = async (query: string) => {
//   try {
//     const UsuarioEncargado = await prisma.estudiantes.findMany({
//       where: {
//         nombre: {
//           contains: query,
//         },
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     return UsuarioEncargado;
//   } catch (error) {
//     throw new Error("Failed to fetch UsuarioEncargado data");
//   }
// };

// export const getDataForExample = async (query: string) => {
//   try {
//     const UsuarioEncargado = await prisma.estudiantes.findMany({
//       where: {
//         id: {
//           contains: query,
//         },
//         nombre: {
//           contains: query,
//         },
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     return UsuarioEncargado;
//   } catch (error) {
//     throw new Error("Failed to fetch UsuarioEncargado data");
//   }
// };

// export const getUsuarioEncargadoById = async (id: string) => {
//   try {
//     const UsuarioEncargado = await prisma.estudiantes.findUnique({
//       where: { id },
//     });
//     return UsuarioEncargado;
//   } catch (error) {
//     throw new Error("Failed to fetch contact data");
//   }
// };

// export const updateUsuarioEncargado = async (
//   id: string,
//   prevSate: any,
//   formData: FormData
// ) => {
//   const validatedFields = UsuarioEncargadoSchema.safeParse(
//     Object.fromEntries(formData.entries())
//   );

//   if (!validatedFields.success) {
//     return {
//       Error: validatedFields.error.flatten().fieldErrors,
//     };
//   }

//   try {
//     await prisma.estudiantes.update({
//       data: {
//         matriculaEscolar: validatedFields.data.matriculaEscolar,
//         nombre: validatedFields.data.nombre,
//         apellidoPaterno: validatedFields.data.apellidoPaterno,
//         apellidoMaterno: validatedFields.data.apellidoMaterno,
//         correoInstitucional: validatedFields.data.correoInstitucional,
//         // direccion: validatedFields.data.direccion,
//         // ciudad: validatedFields.data.ciudad,
//         // pais: validatedFields.data.pais,
//         // codigoPostal: validatedFields.data.codigoPostal,
//         // matriculaVehicular: validatedFields.data.matriculaVehicular,
//         // modelo: validatedFields.data.modelo,
//         // anioRegistro: validatedFields.data.anioRegistro,
//         // infoAdVehiculo: validatedFields.data.infoAdVehiculo,
//         // notasDescriptivas: validatedFields.data.notasDescriptivas,
//       },
//       where: { id },
//     });
//   } catch (error) {
//     return { message: "Failed to update UsuarioEncargado" };
//   }

//   revalidatePath("/employee");
//   redirect("/employee");
// };

// export const deleteUsuarioEncargado = async (id: string) => {
//   try {
//     await prisma.estudiantes.delete({
//       where: { id },
//     });
//   } catch (error) {
//     return { message: "Failed to delete UsuarioEncargado" };
//   }

//   revalidatePath("/employee");
// };
