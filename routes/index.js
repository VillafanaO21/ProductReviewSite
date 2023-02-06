var express = require('express');
var router = express.Router();
const productController = require('../controller/productController.js')
const reviewController = require('../controller/reviewController.js')

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

router.get('/products/:productId/reviews/add', reviewController.renderAddReviewForm);

router.post('/products/:productId/reviews/add', reviewController.addReview);

router.get('/reviews/edit/:id', reviewController.renderEditReviewForm);
module.exports = router;