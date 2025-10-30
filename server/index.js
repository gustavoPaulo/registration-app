const express = require('express');
const port = 9025;
const app = express();
const { sequelize, connect } = require('./config/database');
const pessoaRoutes = require('./routes/pessoaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

app.use(express.json());
app.use('/node-api', pessoaRoutes);
app.use('/node-api', usuarioRoutes);

sequelize.sync();
connect();

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta: ${port}`);
});