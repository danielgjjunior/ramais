/*
  Warnings:

  - Made the column `telefone_particular` on table `funcionario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `funcionario` MODIFY `telefone_particular` VARCHAR(191) NOT NULL;
