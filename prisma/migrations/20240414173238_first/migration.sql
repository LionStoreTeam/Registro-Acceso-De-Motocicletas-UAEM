-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estudiantes" (
    "id" TEXT NOT NULL,
    "matriculaEscolar" TEXT NOT NULL,
    "tipoUsuario" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidoPaterno" TEXT NOT NULL,
    "apellidoMaterno" TEXT NOT NULL,
    "correoInstitucional" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "codigoPostal" TEXT NOT NULL,
    "matriculaVehicular" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "anioRegistro" TEXT NOT NULL,
    "infoAdVehiculo" TEXT NOT NULL,
    "notasDescriptivas" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Estudiantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaestrosAdministrativos" (
    "id" TEXT NOT NULL,
    "matriculaAcademica" TEXT NOT NULL,
    "tipoUsuario" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidoPaterno" TEXT NOT NULL,
    "apellidoMaterno" TEXT NOT NULL,
    "correoInstitucional" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "codigoPostal" TEXT NOT NULL,
    "matriculaVehicular" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "anioRegistro" TEXT NOT NULL,
    "infoAdVehiculo" TEXT NOT NULL,
    "notasDescriptivas" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MaestrosAdministrativos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NoPertenecientesUAEM" (
    "id" TEXT NOT NULL,
    "matriculaAsignada" TEXT NOT NULL,
    "tipoUsuario" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidoPaterno" TEXT NOT NULL,
    "apellidoMaterno" TEXT NOT NULL,
    "correoGeneral" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "codigoPostal" TEXT NOT NULL,
    "matriculaVehicular" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "anioRegistro" TEXT NOT NULL,
    "infoAdVehiculo" TEXT NOT NULL,
    "notasDescriptivas" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NoPertenecientesUAEM_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Estudiantes_matriculaEscolar_key" ON "Estudiantes"("matriculaEscolar");

-- CreateIndex
CREATE UNIQUE INDEX "Estudiantes_correoInstitucional_key" ON "Estudiantes"("correoInstitucional");

-- CreateIndex
CREATE UNIQUE INDEX "Estudiantes_matriculaVehicular_key" ON "Estudiantes"("matriculaVehicular");

-- CreateIndex
CREATE UNIQUE INDEX "MaestrosAdministrativos_matriculaAcademica_key" ON "MaestrosAdministrativos"("matriculaAcademica");

-- CreateIndex
CREATE UNIQUE INDEX "MaestrosAdministrativos_correoInstitucional_key" ON "MaestrosAdministrativos"("correoInstitucional");

-- CreateIndex
CREATE UNIQUE INDEX "MaestrosAdministrativos_matriculaVehicular_key" ON "MaestrosAdministrativos"("matriculaVehicular");

-- CreateIndex
CREATE UNIQUE INDEX "NoPertenecientesUAEM_matriculaAsignada_key" ON "NoPertenecientesUAEM"("matriculaAsignada");

-- CreateIndex
CREATE UNIQUE INDEX "NoPertenecientesUAEM_correoGeneral_key" ON "NoPertenecientesUAEM"("correoGeneral");

-- CreateIndex
CREATE UNIQUE INDEX "NoPertenecientesUAEM_matriculaVehicular_key" ON "NoPertenecientesUAEM"("matriculaVehicular");
