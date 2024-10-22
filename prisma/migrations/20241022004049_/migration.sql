-- CreateTable
CREATE TABLE "Checklist" (
    "id" SERIAL NOT NULL,
    "driverEmail" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "verificacaoDePneus" BOOLEAN NOT NULL DEFAULT false,
    "verificacaoDeLuzes" BOOLEAN NOT NULL DEFAULT false,
    "verificacaoDeFreios" BOOLEAN NOT NULL DEFAULT false,
    "verificacaoDoTanque" BOOLEAN NOT NULL DEFAULT false,
    "verificacaoDeEscapamento" BOOLEAN NOT NULL DEFAULT false,
    "verificacaoDeOleos" BOOLEAN NOT NULL DEFAULT false,
    "verificacaoDeLimpadores" BOOLEAN NOT NULL DEFAULT false,
    "verificacaoDeSinalizacao" BOOLEAN NOT NULL DEFAULT false,
    "verificacaoDeDocumentos" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Checklist_pkey" PRIMARY KEY ("id")
);
