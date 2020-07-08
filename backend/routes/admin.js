const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.post('/add-product', adminController.postProducts);

router.get('/menu', adminController.getProducts);

module.exports = router;
