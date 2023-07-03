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

const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./app/models');

db.mongoose
  .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
  });

var corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./app/routes/route')(app);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Suha application.' });
});

app.listen(8080, () => {
  console.log('on port!');
});
