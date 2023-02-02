var express = require('express');
var router = express.Router();
const productController = require('../controller/productController.js')

router.get('/', function(req, res, next){
  res.render('index', {title: 'express'});
});
router.get('/products', productController.viewProducts);
router.get('/products/profile/:id', productController.renderProfile );
router.get('/products/edit/:id', productController.renderEditForm);
router.post('/products/edit/:id', productController.updateProduct);
router.get('/products/add', productController.renderAddForm);
router.post('/products/add', productController.addProduct);
router.get('/products/delete/:id', productController.deleteProduct);
module.exports = router;