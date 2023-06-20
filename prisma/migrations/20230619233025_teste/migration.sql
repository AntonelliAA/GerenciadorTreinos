-- CreateTable
CREATE TABLE `users` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `idade` INTEGER NOT NULL,
    `altura` DECIMAL(65, 30) NOT NULL,
    `peso` DECIMAL(65, 30) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Treinos` (
    `id_treino` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_treino`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exercicio` (
    `id_exercicio` INTEGER NOT NULL AUTO_INCREMENT,
    `series` INTEGER NOT NULL,
    `repeticoes` INTEGER NOT NULL,
    `carga` DECIMAL(65, 30) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `id_usuario` INTEGER NOT NULL,
    `id_treino` INTEGER NOT NULL,

    PRIMARY KEY (`id_exercicio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Exercicio` ADD CONSTRAINT `Exercicio_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `users`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exercicio` ADD CONSTRAINT `Exercicio_id_treino_fkey` FOREIGN KEY (`id_treino`) REFERENCES `Treinos`(`id_treino`) ON DELETE RESTRICT ON UPDATE CASCADE;
