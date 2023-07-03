const dbconfig = require('../config/db.config');
const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = dbconfig.url;
db.products = require('./model.js')(mongoose);
module.exports = db;
