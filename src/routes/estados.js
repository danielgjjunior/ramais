const express = require('express');
const { PrismaClient } = require('../database/generated/client');
const prisma = new PrismaClient();

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const estado = await prisma.estado.create({
      data: req.body,
    });
    res.json(estado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar estado' });
  }
});

router.get('/', async (req, res) => {
  const estados = await prisma.estado.findMany();
  res.json(estados);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const estado = await prisma.estado.findUnique({
    where: { id: parseInt(id) },
  });
  if (!estado) {
    return res.status(404).json({ error: 'Estado não encontrado' });
  }
  res.json(estado);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedEstado = await prisma.estado.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(updatedEstado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar estado' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.estado.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Estado deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar estado' });
  }
});

module.exports = router;
