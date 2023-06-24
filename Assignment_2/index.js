// const express = require('express');
// // const mongoose = require('mongoose');
// const cors = require('cors');
// // const MONGODB_URL = 'mongodb+srv://parksuha94:Dlgkrsus2@suhapark.xi9ourq.mongodb.net/?retryWrites=true&w=majority'

// const app = express();
// // mongoose.connect(MONGODB_URL, { useNewUrlParser: true }, (err) => {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log('Successfully connected');
// //   }
// // });

// app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded());

// app.get('/', (req, res, next) => {
//   res.json({ message: 'Welcome to Suha application.' });
// });

// app.listen(8080, () => {
//   console.log('on port!');
// });

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const productController = require('./app/controllers/controller');

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    'mongodb+srv://parksuha94:Dlgkrsus2@suhapark.xi9ourq.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
  });

var corsOptions = {
  origin: 'http://localhost:8081',
};

// set port, listen for requests

// Create a model based on the product schema

// Define the CRUD routes

// Create a new product
// Rest of the code...

// Create a new product

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Suha application.' });
});

app.get('/api/products', productController.getAllProducts);

// Retrieve all products
app.get('/api/products/:id', productController.getProductById);

// Retrieve a single product by ID
app.post('/api/products', productController.addNewProduct);

app.put('/api/products/:id', productController.updateProductById);
app.delete('/api/products/:id', productController.deleteProductById);
app.delete('/api/products', productController.deleteAll);
app.get('/api/products', productController.findProductsByName);

app.listen(8080, () => {
  console.log('on port!');
});
