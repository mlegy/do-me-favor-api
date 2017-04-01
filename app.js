const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const index = require('./routes/index');
const users = require('./routes/users');
const favors = require('./routes/favors');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const databaseUri = 'mongodb://localhost/do-me-favor-testing';
mongoose.connect(databaseUri);

app.use('/', index);
app.use('/users', users);
app.use('/favors', favors);

module.exports = app;
