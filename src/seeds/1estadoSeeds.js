const { PrismaClient } = require('../database/generated/client');
const prisma = new PrismaClient();

async function seedEstados() {
  await prisma.estado.createMany({
    data: [
      { nome: 'São Paulo', abreviacao: 'SP' },
      { nome: 'Rio de Janeiro', abreviacao: 'RJ' },
      // Adicione mais estados conforme necessário
    ],
  });
}

seedEstados()
  .catch((error) => {
    console.error('Erro ao popular estados:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
