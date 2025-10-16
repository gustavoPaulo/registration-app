const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('registration-app', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // opcional, remove logs no terminal
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('🟢 Conexão com PostgreSQL bem-sucedida!');
  } catch (error) {
    console.error('🔴 Erro na conexão com PostgreSQL:', error);
  }
}

module.exports = { sequelize, connect };