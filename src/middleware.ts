/**
 El middleware actúa como un puente entre tecnologías, 
 herramientas y bases de datos diversas para que pueda integrarlas sin dificultad en un único sistema. 
 Este sistema único provee un servicio unificado a sus usuarios. 
 Por ejemplo, una aplicación frontend de Windows envía y recibe datos desde un servidor backend de Linux,
  pero los usuarios de la aplicación no están al tanto de la diferencia.
 */
export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/registrar-motocicletas/:path*"],
};
// ¿Cómo proteger todas las rutas dentro de una carpeta(Ruta)
// matcher: ['/dashboard/:path*'],
