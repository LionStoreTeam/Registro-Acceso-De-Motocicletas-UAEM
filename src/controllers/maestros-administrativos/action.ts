//lib\action.ts
"use server";

import { z } from "zod"; //npm i zod https://www.npmjs.com/package/zod
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const RegistroMaestroAdministrativoSchema = z.object({
  matriculaAcademica: z.string().min(8).max(8),
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

export const guardarRegistroMaestroAdministrativo = async (
  prevSate: any,
  formData: FormData
) => {
  const validatedFields = RegistroMaestroAdministrativoSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.maestrosAdministrativos.create({
      data: {
        matriculaAcademica: validatedFields.data.matriculaAcademica,
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

  revalidatePath("/");
  redirect("/");
};

export const getDatosRegistroMaestroAdministrativo = async (query: string) => {
  try {
    const RegistroMaestroAdministrativo =
      await prisma.maestrosAdministrativos.findMany({
        select: {
          id: true,
          matriculaAcademica: true,
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
    return RegistroMaestroAdministrativo;
  } catch (error) {
    throw new Error("Error al cargar los datos del Maestro - Administrativo");
  }
};

export const getDatosRegistroMaestroAdministrativoBuscador = async (
  query: string
) => {
  try {
    const RegistroMaestroAdministrativoBuscador =
      await prisma.maestrosAdministrativos.findMany({
        where: {
          matriculaAcademica: {
            contains: query,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    return RegistroMaestroAdministrativoBuscador;
  } catch (error) {
    throw new Error("Error al buscar el registro del Maestro - Administrativo");
  }
};

// export const getDataForExample = async (query: string) => {
//   try {
//     const UsuarioEncargado = await prisma.user.findMany({
//       where: {
//         id: {
//           contains: query,
//         },
//         username: {
//           contains: query,
//         },
//         email: {
//           contains: query,
//         },
//         password: {
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

export const getRegistroMaestroAdministrativoById = async (id: string) => {
  try {
    const RegistroMaestroAdministrativo =
      await prisma.maestrosAdministrativos.findUnique({
        where: { id },
      });
    return RegistroMaestroAdministrativo;
  } catch (error) {
    throw new Error("Error al obtener los datos del Maestro - Administrativo");
  }
};

export const updateRegistroMaestroAdministrativo = async (
  id: string,
  prevSate: any,
  formData: FormData
) => {
  const validatedFields = RegistroMaestroAdministrativoSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.maestrosAdministrativos.update({
      data: {
        matriculaAcademica: validatedFields.data.matriculaAcademica,
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

export const deleteRegistroMaestroAdministrativo = async (id: string) => {
  try {
    await prisma.maestrosAdministrativos.delete({
      where: { id },
    });
  } catch (error) {
    return {
      message: "Error al eliminar el registro del Maestro - Administrativo",
    };
  }

  revalidatePath("/");
};
