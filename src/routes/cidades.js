const express = require('express');
const { PrismaClient } = require('../database/generated/client');
const prisma = new PrismaClient();

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const cidade = await prisma.cidades.create({
      data: req.body,
    });
    res.json(cidade);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar cidade' });
  }
});

router.get('/', async (req, res) => {
  const cidades = await prisma.cidades.findMany();
  res.json(cidades);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const cidade = await prisma.cidades.findUnique({
    where: { id: parseInt(id) },
  });
  if (!cidade) {
    return res.status(404).json({ error: 'Cidade não encontrada' });
  }
  res.json(cidade);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCidade = await prisma.cidades.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(updatedCidade);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar cidade' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.cidades.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Cidade deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar cidade' });
  }
});

module.exports = router;
