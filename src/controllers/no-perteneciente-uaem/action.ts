//lib\action.ts
"use server";

import { z } from "zod"; //npm i zod https://www.npmjs.com/package/zod
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const RegistroNoPertenecienteUAEMSchema = z.object({
  matriculaAsignada: z.string().min(10), // Aplicar condicional para que sea unica e irrepetible
  tipoUsuario: z.string(),
  nombre: z.string().min(3).max(20),
  apellidoPaterno: z.string().min(3).max(30),
  apellidoMaterno: z.string().min(3).max(30),
  correoGeneral: z.string().min(12),
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

export const guardarRegistroNoPertenecienteUAEM = async (
  prevSate: any,
  formData: FormData
) => {
  const validatedFields = RegistroNoPertenecienteUAEMSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.noPertenecientesUAEM.create({
      data: {
        matriculaAsignada: validatedFields.data.matriculaAsignada,
        tipoUsuario: validatedFields.data.tipoUsuario,
        nombre: validatedFields.data.nombre,
        apellidoPaterno: validatedFields.data.apellidoPaterno,
        apellidoMaterno: validatedFields.data.apellidoMaterno,
        correoGeneral: validatedFields.data.correoGeneral,
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

export const getDatosRegistroNoPertenecienteUAEM = async (query: string) => {
  try {
    const RegistroNoPertenecienteUAEM =
      await prisma.noPertenecientesUAEM.findMany({
        select: {
          id: true,
          matriculaAsignada: true,
          tipoUsuario: true,
          nombre: true,
          apellidoPaterno: true,
          apellidoMaterno: true,
          correoGeneral: true,
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
    return RegistroNoPertenecienteUAEM;
  } catch (error) {
    throw new Error(
      "Error al cargar los datos del usuario No Perteneciente a la UAEM"
    );
  }
};

export const getDatosRegistroNoPertenecienteUAEMBuscador = async (
  query: string
) => {
  try {
    const RegistroNoPertenecienteUAEMBuscador =
      await prisma.noPertenecientesUAEM.findMany({
        where: {
          matriculaAsignada: {
            contains: query,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    return RegistroNoPertenecienteUAEMBuscador;
  } catch (error) {
    throw new Error(
      "Error al buscar el registro del usuario No Perteneciente a la UAEM"
    );
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

export const getRegistroNoPertenecienteUAEMById = async (id: string) => {
  try {
    const RegistroNoPertenecienteUAEM =
      await prisma.noPertenecientesUAEM.findUnique({
        where: { id },
      });
    return RegistroNoPertenecienteUAEM;
  } catch (error) {
    throw new Error(
      "Error al obtener los datos del usuario No Perteneciente a la UAEM"
    );
  }
};

export const updateRegistroNoPertenecienteUAEM = async (
  id: string,
  prevSate: any,
  formData: FormData
) => {
  const validatedFields = RegistroNoPertenecienteUAEMSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.noPertenecientesUAEM.update({
      data: {
        matriculaAsignada: validatedFields.data.matriculaAsignada,
        tipoUsuario: validatedFields.data.tipoUsuario,
        nombre: validatedFields.data.nombre,
        apellidoPaterno: validatedFields.data.apellidoPaterno,
        apellidoMaterno: validatedFields.data.apellidoMaterno,
        correoGeneral: validatedFields.data.correoGeneral,
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

export const deleteRegistroNoPertenecienteUAEM = async (id: string) => {
  try {
    await prisma.noPertenecientesUAEM.delete({
      where: { id },
    });
  } catch (error) {
    return {
      message:
        "Error al eliminar el registro del usuario No Perteneciente a la UAEM",
    };
  }

  revalidatePath("/");
};
