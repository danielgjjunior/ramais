const express = require('express');
const { PrismaClient } = require('../database/generated/client');
const prisma = new PrismaClient();

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const funcionario = await prisma.funcionario.create({
      data: req.body,
    });
    res.json(funcionario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar funcionário' });
  }
});

router.get('/', async (req, res) => {
  const funcionarios = await prisma.funcionario.findMany({
    include: {
      cidade: true,
      funcao: {
        include: {
          setor: true,
        },
      },
    },
  });
  res.json(funcionarios);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const funcionario = await prisma.funcionario.findUnique({
    where: { id: parseInt(id) },
    include: {
      cidade: true,
      funcao: {
        include: {
          setor: true,
        },
      },
    },
  });
  if (!funcionario) {
    return res.status(404).json({ error: 'Funcionário não encontrado' });
  }
  res.json(funcionario);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedFuncionario = await prisma.funcionario.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(updatedFuncionario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar funcionário' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.funcionario.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Funcionário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar funcionário' });
  }
});

module.exports = router;
