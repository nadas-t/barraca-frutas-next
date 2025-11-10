-- CreateTable
CREATE TABLE "Fruta" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "imagem" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Fruta_pkey" PRIMARY KEY ("id")
);
