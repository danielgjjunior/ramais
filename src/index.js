const express = require('express');
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const funcionariosRouter = require('./routes/funcionarios');
const estadosRouter = require('./routes/estados');
const cidadesRouter = require('./routes/cidades');
const funcoesRouter = require('./routes/funcoes');
const setoresRouter = require('./routes/setores');

app.use(express.json());
app.use(cors());

app.use('/funcionarios', funcionariosRouter);
app.use('/estados', estadosRouter);
app.use('/cidades', cidadesRouter);
app.use('/funcoes', funcoesRouter);
app.use('/setores', setoresRouter);
