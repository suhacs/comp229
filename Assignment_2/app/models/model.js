const mongoose = require('mongoose');
const products = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  published: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const categories = new mongoose.Schema({
  name: { type: String, required: true },
  categories: {
    type: String,
    enum: ['Men', 'Women', 'Teens'],
    required: true,
  },
  // Other fields...
});

const product = mongoose.model('Product', products);
module.exports = product;

const category = mongoose.model('Categories', categories);
module.exports = category;
