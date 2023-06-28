-- CreateTable
CREATE TABLE "usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "altura" DECIMAL(65,30) NOT NULL,
    "peso" DECIMAL(65,30) NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Treinos" (
    "id_treino" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Treinos_pkey" PRIMARY KEY ("id_treino")
);

-- CreateTable
CREATE TABLE "Exercicio" (
    "id_exercicio" SERIAL NOT NULL,
    "series" INTEGER NOT NULL,
    "repeticoes" INTEGER NOT NULL,
    "carga" DECIMAL(65,30) NOT NULL,
    "nome" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_treino" INTEGER NOT NULL,

    CONSTRAINT "Exercicio_pkey" PRIMARY KEY ("id_exercicio")
);

-- AddForeignKey
ALTER TABLE "Treinos" ADD CONSTRAINT "Treinos_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercicio" ADD CONSTRAINT "Exercicio_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercicio" ADD CONSTRAINT "Exercicio_id_treino_fkey" FOREIGN KEY ("id_treino") REFERENCES "Treinos"("id_treino") ON DELETE RESTRICT ON UPDATE CASCADE;
