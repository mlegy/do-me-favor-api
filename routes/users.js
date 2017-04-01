const express = require('express');
const router = express.Router();
const HTTPStatus = require('http-status');
const api = require('../managers/user-manager').api;

router.get('/:id', function (req, res, next) {
  return api.getUserById(req.params.id).then(user => {
    if (user) res.json(user);
    else res.status(HTTPStatus.NOT_FOUND).json({
      error: 'not found'
    });
  }).catch(error => {
    console.error(error);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
      error: error.message
    });
  });
});

router.get('/email/:email', function (req, res, next) {
  return api.getUserByEmail(req.params.email).then(user => {
    if (user) res.json(user);
    else res.status(HTTPStatus.NOT_FOUND).json({
      error: 'not found'
    });
  }).catch(error => {
    console.error(error);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
      error: error.message
    });
  });
});

router.post('/', function (req, res, next) {
  return api.addUser(req.body.user).then(user => {
    if (user) res.json(user);
    else res.status(HTTPStatus.BAD_REQUEST).json({
      error: 'user not added'
    });
  }).catch(error => {
    console.error(error);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
      error: error.message
    });
  });
});

router.patch('/:id', function (req, res, next) {
  return api.updateUserLocation(req.params.id, req.body.location).then(user => {
    if (user) res.json(user);
    else res.sendStatus(HTTPStatus.BAD_REQUEST).json({
      error: 'user not found'
    });
  }).catch(error => {
    console.error(error);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
      error: error.message
    });
  });
});

module.exports = router;
