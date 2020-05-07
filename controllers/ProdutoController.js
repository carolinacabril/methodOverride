const ProdutoController = {
  viewProduto: (req, res) => {
    return res.render('produto');
  },
  salvarForm: (req, res) => {
    let {produtoNome, produtoPreco} = req.body
    return res.redirect('/produto/sucesso')
  }, 
  sucesso: (req, res) =>{
    return res.render('sucesso');
  }, 
  viewEditar: (req, res) => {
    let {id} = req.params
    let produtos = [
      {id:1, nome:'Produto X', preco:5},
      {id:2, nome:'Produto Y', preco:10},
      {id:3, nome:'Produto Z', preco:15}
    ]
    return res.render('editarProduto', {listaProdutos: produtos[id]})
  },
  editar: (req, res) => {
    let {produtoNome, produtoPreco} = req.body
    return res.send(`O produto ${produtoNome} foi editado com sucesso`)
  }, 
  listarProdutos: (req, res) => {
    let produtos = [
      {id:1, nome:'Produto X', preco:5},
      {id:2, nome:'Produto Y', preco:10},
      {id:3, nome:'Produto Z', preco:15}
    ]

    return res.render('listarProdutos', {listarProdutos: produtos})
  },
  deletarProduto: (req, res) => {
    let {id} = req.params
    return res.send('O produto do id: '+ id + ' foi deletado com sucesso')
  }

}

module.exports = ProdutoController;