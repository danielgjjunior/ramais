const { PrismaClient } = require('../database/generated/client');
const prisma = new PrismaClient();

async function seedFuncionarios() {
  await prisma.funcionario.createMany({
    data: [
      { cidadeId: 1, nome: 'João', ramal: '123', telefone_corporativo: '555-1234', funcaoId: 1, email: 'joao@example.com', Skype: 'joao_skype',telefone_particular:'81818181' },
      { cidadeId: 2, nome: 'Maria', ramal: '456', telefone_corporativo: '555-5678', funcaoId: 2, email: 'maria@example.com', Skype: 'maria_skype',telefone_particular:'62956515' },
    ],
  });
}

seedFuncionarios()
  .catch((error) => {
    console.error('Erro ao popular funcionários:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
