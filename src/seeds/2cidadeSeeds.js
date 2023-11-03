const { PrismaClient } = require('../database/generated/client');
const prisma = new PrismaClient();

async function seedCidades() {
  await prisma.cidades.createMany({
    data: [
      { nome: 'São Paulo', estadoId: 1 },
      { nome: 'Rio de Janeiro', estadoId: 2 },
      // Adicione mais cidades conforme necessário
    ],
  });
}

seedCidades()
  .catch((error) => {
    console.error('Erro ao popular cidades:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
