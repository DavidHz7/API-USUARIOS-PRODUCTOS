-- CreateTable
CREATE TABLE "productos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "fecha_exp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("id")
);
