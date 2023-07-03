module.exports = (app) => {
  const productController = require('../controllers/controller');
  const router = require('express').Router();

  router.get('/', productController.findProductsByName);
  router.get('/', productController.getAllProducts);

  // Retrieve all products
  router.get('/:id', productController.getProductById);

  // Retrieve a single product by ID
  router.post('', productController.addNewProduct);

  router.put('/:id', productController.updateProductById);
  router.delete('/:id', productController.deleteProductById);
  router.delete('/', productController.deleteAll);
  app.use('/api/products', router);
};
