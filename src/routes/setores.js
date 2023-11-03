const express = require('express');
const { PrismaClient } = require('../database/generated/client');
const prisma = new PrismaClient();

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const setor = await prisma.setor.create({
      data: req.body,
    });
    res.json(setor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar setor' });
  }
});

router.get('/', async (req, res) => {
  const setores = await prisma.setor.findMany();
  res.json(setores);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const setor = await prisma.setor.findUnique({
    where: { id: parseInt(id) },
  });
  if (!setor) {
    return res.status(404).json({ error: 'Setor não encontrado' });
  }
  res.json(setor);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSetor = await prisma.setor.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.json(updatedSetor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar setor' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.setor.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Setor deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar setor' });
  }
});

module.exports = router;
