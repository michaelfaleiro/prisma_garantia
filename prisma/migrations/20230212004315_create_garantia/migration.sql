-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotaFiscal" (
    "id" SERIAL NOT NULL,
    "nfe" INTEGER NOT NULL,
    "dataSolicitacao" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "produtoId" INTEGER NOT NULL,

    CONSTRAINT "NotaFiscal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "defeito" TEXT NOT NULL,
    "nfeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NotaFiscal" ADD CONSTRAINT "NotaFiscal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_nfeId_fkey" FOREIGN KEY ("nfeId") REFERENCES "NotaFiscal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
