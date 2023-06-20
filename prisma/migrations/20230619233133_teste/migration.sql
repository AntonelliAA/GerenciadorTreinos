/*
  Warnings:

  - Added the required column `id_usuario` to the `Treinos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `treinos` ADD COLUMN `id_usuario` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Treinos` ADD CONSTRAINT `Treinos_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `users`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;
