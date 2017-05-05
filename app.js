const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const HTTPStatus = require('http-status');

const index = require('./routes/index');
const users = require('./routes/users');
const favors = require('./routes/favors');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const databaseUri = process.env.DB_URI;
mongoose.connect(databaseUri);

app.use('*', authenticate);

app.use('/', index);
app.use('/users', users);
app.use('/favors', favors);

function authenticate(req, res, next) {
  if(req.query.access_token === process.env.ACCESS_TOKEN) next();
  else res.status(HTTPStatus.UNAUTHORIZED).json({error: 'incorrect access token'});
}

module.exports = app;
