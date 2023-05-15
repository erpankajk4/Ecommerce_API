// Enviornmental Variables
require('dotenv').config(".env");

// Import Modules 
const express = require('express');
const bodyParser = require('body-parser');

// Connecting to the MongoDB database using Mongoose
const db = require('./config/mongoose');

// Creating an instance of the Express application
const app = express();

// BodyParser
app.use(bodyParser.json());

// Use express router
app.use('/products', require('./routes/products'));

// PORT Listen
const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server started on port  ${PORT}`));
