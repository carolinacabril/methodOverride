const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/IndexController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contato', IndexController.viewContato);
router.get('/confirmarenvio', IndexController.confirmarEnvio);

module.exports = router;
