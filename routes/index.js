var express = require('express');
var router = express.Router();
const productController = require('../controller/productController.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products/profile/:id', productController.renderProfile );
module.exports = router;