const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController')

router.get('/criar', ProdutoController.viewProduto)
router.post('/criar', ProdutoController.salvarForm)
router.get('/sucesso', ProdutoController.sucesso)
router.get('/:id/editar', ProdutoController.viewEditar)
router.put('/editar', ProdutoController.editar)
router.get('/', ProdutoController.listarProdutos)
router.delete('/deletar/:id', ProdutoController.deletarProduto)

module.exports = router;