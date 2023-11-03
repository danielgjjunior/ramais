const { PrismaClient } = require('../database/generated/client');
const prisma = new PrismaClient();

async function seedSetores() {
  await prisma.setor.createMany({
    data: [
      { nome: 'RH', descricao: 'Recursos Humanos' },
      { nome: 'TI', descricao: 'Tecnologia da Informação' },
      // Adicione mais setores conforme necessário
    ],
  });
}

seedSetores()
  .catch((error) => {
    console.error('Erro ao popular setores:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
