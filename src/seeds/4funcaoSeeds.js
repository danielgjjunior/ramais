const { PrismaClient } = require('../database/generated/client');
const prisma = new PrismaClient();

async function seedFuncoes() {
  await prisma.funcao_funcionario.createMany({
    data: [
      { nome: 'Gerente', setorId: 1, descricao: 'Gerente de Departamento' },
      { nome: 'Desenvolvedor', setorId: 2, descricao: 'Desenvolvedor de Software' },
      // Adicione mais funções conforme necessário
    ],
  });
}

seedFuncoes()
  .catch((error) => {
    console.error('Erro ao popular funções:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
