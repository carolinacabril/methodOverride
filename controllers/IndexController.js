const IndexController = {
  viewContato: (req, res) => {
    res.render('contato')
  }, 
  confirmarEnvio: (req, res) => {
    let {nome, email} = req.query
    res.send('Ola os dados do email: ' + email +' foram enviados com sucesso')
  }
}

module.exports = IndexController;