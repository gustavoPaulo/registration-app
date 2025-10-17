const express = require('express');
const router = express.Router();
const PessoaController = require('../controllers/PessoaController');

router.get('/pessoas', PessoaController.list);
router.post('/pessoas/:nome', PessoaController.filterByName);
router.get('/pessoas/:id', PessoaController.findById);
router.post('/pessoa', PessoaController.create);
router.delete('/pessoa/:id', PessoaController.delete);

module.exports = router;