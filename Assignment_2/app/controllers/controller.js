const Product = require('../models/model');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'No such a product' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addNewProduct = async (req, res) => {
  try {
    const { name, description, price, published, category } = req.body;
    const product = new Product({
      name,
      description,
      price,
      published,
      category,
    });
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { name, description, price, published, category } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, published, category },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'No such a product' });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'No such a product' });
    }
    res.json({ message: 'Product deleted as requested' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAll = async (req, res) => {
  try {
    const deletedAllProduct = await Product.deleteMany();
    if (!deletedAllProduct) {
      return res.json({ message: 'No any products to delete!' });
    }
    res.json({ message: 'Products deleted all' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findProductsByName = async (req, res) => {
  try {
    const name = req.query.name;

    const condition = name
      ? { name: { $regex: new RegExp(name), $options: 'i' } }
      : {};

    const data = await Product.find(condition);

    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occured!',
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProductById,
  deleteProductById,
  deleteAll,
  findProductsByName,
};
