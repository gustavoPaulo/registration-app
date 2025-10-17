const { Op } = require('sequelize');
const Pessoa = require('../models/Pessoa');

const PessoaController = {
  async list(req, res) {
    try {
      const pessoas = await Pessoa.findAll();
      res.status(200).json(pessoas);
    } catch (error) {
      console.error('Erro ao buscar pessoas:', error);
      res.status(500).json({ error: 'Erro ao buscar pessoas' });
    }
  },

  async filterByName(req, res) {
    try {
      const { filtro } = req.body;

      const pessoas = await Pessoa.findAll(
        {
          where: {
            nome: {
              [Op.iLike]: `%${filtro}%`
            }
          }
        });

      res.status(200).json(pessoas);
    } catch (error) {
      console.error('Erro ao buscar pessoas:', error);
      res.status(500).json({ error: 'Erro ao buscar pessoas' });
    }
  },
  
  async create(req, res) {
    try {
      const pessoa = await Pessoa.create(req.body);
      res.status(201).json(pessoa);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async findById(req, res) {
    const pessoa = await Pessoa.findById(req.params.id);
    if (!pessoa) return res.status(404).json({ error: 'Registro não encontrado' });
    res.json(pessoa);
  },

  async delete(req, res) {
    await Pessoa.findByIdAndDelete(req.params.id);
    res.status(204).send();
  }
};

module.exports = PessoaController;
