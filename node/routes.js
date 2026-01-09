const express = require('express');
const router = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')

router.get('/', homeController.criarUsuario);
router.post('/',homeController.trataPost);
router.get('/contato',contatoController.paginaInicial)

console.log(module.exports)


module.exports = router;