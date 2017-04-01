const Favor = require('../../models/favor');

const addFavor = function (favor) {
  const newFavor = Favor({
    title: favor.title,
    description: favor.description,
    owner: favor.owner,
    location: favor.location,
    created_at: +new Date(),
    updated_at: +new Date()
  });
  return newFavor.save();
};

const getFavorById = function (favorId) {
  return Favor.findOne({
      _id: favorId,
    }, {
      __v: 0,
    })
    .then(favor => {
      if (favor) return favor;
    });
};

const getAllFavorsNearLocation = function (long, lat) {
  return Favor.aggregate(
    [{
      '$geoNear': {
        'near': {
          'type': 'Point',
          'coordinates': [long, lat]
        },
        'distanceField': 'distance',
        'sperical': true,
        'maxDistance': 10000
      },
      'is_done': false
    }]
  ).then(favors => {
    if (favors) return favors;
  });
};

const addBenefactorToFavor = function (favorId, benefactorId) {
  return Favor.findOneAndUpdate({
      _id: favorId,
      'benefactor': {
        $exists: false
      }
    }, {
      benefactor: benefactorId,
    })
    .then(favor => {
      if (favor) return favor;
    });
};

const markFavorAsDone = function (favorId) {
  return Favor.findOneAndUpdate({
      _id: favorId
    }, {
      is_done: true,
    })
    .then(favor => {
      if (favor) return favor;
    });
};

module.exports = {
  addFavor: addFavor,
  getFavorById: getFavorById,
  addBenefactorToFavor: addBenefactorToFavor,
  markFavorAsDone: markFavorAsDone
};
