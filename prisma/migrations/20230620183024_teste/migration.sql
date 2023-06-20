/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `exercicio` DROP FOREIGN KEY `Exercicio_id_usuario_fkey`;

-- DropForeignKey
ALTER TABLE `treinos` DROP FOREIGN KEY `Treinos_id_usuario_fkey`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `usuarios` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `idade` INTEGER NOT NULL,
    `altura` DECIMAL(65, 30) NOT NULL,
    `peso` DECIMAL(65, 30) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Treinos` ADD CONSTRAINT `Treinos_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exercicio` ADD CONSTRAINT `Exercicio_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;
