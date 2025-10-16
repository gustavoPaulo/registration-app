const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Pessoa = sequelize.define('Pessoa', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  idade: DataTypes.INTEGER
}, {
  tableName: 'pessoas',
  timestamps: false
});

module.exports = Pessoa;