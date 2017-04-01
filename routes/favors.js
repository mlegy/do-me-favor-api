const express = require('express');
const router = express.Router();
const HTTPStatus = require('http-status');
const api = require('../managers/favor-manager').api;

router.get('/', function (req, res, next) {
  return api.getAllFavorsNearBy(req.query.long, req.query.lat).then(favors => {
    if (favors) res.json(favors);
    else res.sendStatus(HTTPStatus.NOT_FOUND).json({
      error: 'not found'
    });
  }).catch(error => {
    console.error(error);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
      error: error.message
    });
  });
});

router.get('/:id', function (req, res, next) {
  return api.getFavorById(req.params.id).then(favor => {
    if (favor) res.json(favor);
    else res.sendStatus(HTTPStatus.NOT_FOUND).json({
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
  return api.addFavor(req.favor).then(favor => {
    if (favor) res.json(favor);
    else res.sendStatus(HTTPStatus.BAD_REQUEST).json({
      error: 'favor not added'
    });
  }).catch(error => {
    console.error(error);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
      error: error.message
    });
  });
});

router.patch('/:id/benefactor', function (req, res, next) {
  return api.addBenefactorToFavor(req.params.id, req.benefactor_id).then(favor => {
    if (favor) res.json(favor);
    else res.sendStatus(HTTPStatus.BAD_REQUEST).json({
      error: 'favor not found'
    });
  }).catch(error => {
    console.error(error);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
      error: error.message
    });
  });
});

router.patch('/:id/done', function (req, res, next) {
  return api.markFavorAsDone(req.params.id).then(favor => {
    if (favor) res.json(favor);
    else res.sendStatus(HTTPStatus.BAD_REQUEST).json({
      error: 'favor not found'
    });
  }).catch(error => {
    console.error(error);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
      error: error.message
    });
  });
});

module.exports = router;
