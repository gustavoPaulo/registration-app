const { Op } = require('sequelize');
const Usuario = require('../models/Usuario');

const UsuarioController = {

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const usuario = await Usuario.findOne(
        {
          where: {
            email: {
              [Op.iLike]: `%${email}%`
            },
            password: {
              [Op.iLike]: `%${password}%`
            }
          }
        });

      res.status(200).json(usuario);
      
    } catch (error) {
      console.error('Erro ao validar login:', error);
      res.status(500).json({ error: 'Erro ao validar login' });
    }
  }
};

module.exports = UsuarioController;
