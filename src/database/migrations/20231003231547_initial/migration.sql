-- CreateTable
CREATE TABLE `Funcionario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cidadeId` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ramal` VARCHAR(191) NOT NULL,
    `telefone_corporativo` VARCHAR(191) NOT NULL,
    `funcaoId` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `Skype` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cidades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `estadoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estado` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `abreviacao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funcao_funcionario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `setorId` INTEGER NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Setor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Funcionario` ADD CONSTRAINT `Funcionario_cidadeId_fkey` FOREIGN KEY (`cidadeId`) REFERENCES `Cidades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funcionario` ADD CONSTRAINT `Funcionario_funcaoId_fkey` FOREIGN KEY (`funcaoId`) REFERENCES `Funcao_funcionario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cidades` ADD CONSTRAINT `Cidades_estadoId_fkey` FOREIGN KEY (`estadoId`) REFERENCES `Estado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funcao_funcionario` ADD CONSTRAINT `Funcao_funcionario_setorId_fkey` FOREIGN KEY (`setorId`) REFERENCES `Setor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
