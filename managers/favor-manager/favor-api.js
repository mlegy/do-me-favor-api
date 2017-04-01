const dal = require('./favor-dal');

const getAllFavorsNearBy = function(long, lat, maxDistance){
  return dal.getAllFavorsNearLocation(long, lat, maxDistance);
};

const getFavorById = function(favorId){
  return dal.getFavorById(favorId);
};

const addFavor = function (favor) {
  return dal.addFavor(favor);
};

const addBenefactorToFavor = function (favorId, benefactorId) {
  return dal.addBenefactorToFavor(favorId, benefactorId);
};

const markFavorAsDone = function (favorId) {
  return dal.markFavorAsDone(favorId);
};

module.exports = {
  getAllFavorsNearBy: getAllFavorsNearBy,
  getFavorById: getFavorById,
  addFavor: addFavor,
  addBenefactorToFavor: addBenefactorToFavor,
  markFavorAsDone: markFavorAsDone
};
