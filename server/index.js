const express = require('express');
const port = 9025;
const app = express();
const { sequelize, connect } = require('./config/database');
const pessoaRoutes = require('./routes/pessoaRoutes');

app.use(express.json());
app.use('/node-api', pessoaRoutes);

sequelize.sync();
connect();

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta: ${port}`);
});