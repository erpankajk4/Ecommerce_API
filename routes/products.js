const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

// Create a new product
router.post('/create', productsController.createProduct);

// Get a list of products
router.get('/', productsController.getProducts);

// Delete a product
router.delete('/:id', productsController.deleteProduct);

// Update product quantity
router.post('/:id/update_quantity', productsController.updateQuantity);

module.exports = router;
