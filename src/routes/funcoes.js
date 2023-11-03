const express = require('express');
const { PrismaClient } = require('../database/generated/client');
const prisma = new PrismaClient();

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const funcao = await prisma.funcao_funcionario.create({
      data: req.body,
    });
    res.json(funcao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar função' });
  }
});

router.get('/', async (req, res) => {
  const funcoes = await prisma.funcao_funcionario.findMany();
  res.json(funcoes);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const funcao = await prisma.funcao_funcionario.findUnique({
    where: { id: parseInt(id) },
  });
  if (!funcao) {
    return res.status(404).json({ error: 'Função não encontrada' });
  }
  res.json(funcao);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedFuncao = await prisma.funcao_funcionario.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(updatedFuncao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar função' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.funcao_funcionario.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Função deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar função' });
  }
});

module.exports = router;
