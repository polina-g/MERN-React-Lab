///////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config();
const { PORT = 3001, DATABASE_URL } = process.env;
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const logger = require('morgan')
const peopleController = require('./controllers/people.js')
const app = express();
///////////////////////////////
// DATABASE
////////////////////////////////
mongoose.connect(DATABASE_URL);
mongoose.connection
    .on('open', () => console.log('MongoDB connected'))
    .on('close', () => console.log('MongoDB disconnected'))
    .on('error', (error) => console.log('An error occured connecting to MongoDB: ', error))
///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use('/', peopleController);
///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));