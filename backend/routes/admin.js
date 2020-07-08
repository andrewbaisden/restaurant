const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.post('/add-product', adminController.postProducts);

router.get('/menu', adminController.getProducts);

router.get('/menu/:productId', adminController.getProduct);

router.post('/delete', adminController.postDeleteProduct);

module.exports = router;
