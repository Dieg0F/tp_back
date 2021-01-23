'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const initRoutes = require('./routes/init.routes');
const prodRoutes = require('./routes/product.routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', initRoutes);
app.use('/', prodRoutes);

module.exports = app;