const User = require('../../models/user');
const LocationSchema = require('../../models/location');

const addUser = function (user) {
  const newUser = User({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    avatar: user.avatar,
    last_seen: new Date().getDate(),
    created_at: new Date().getDate(),
    updated_at: new Date().getDate()
  });
  return newUser.save();
};

const getUserById = function (userID) {
  return User.findOne({
      _id: userID,
    }, {
      __v: 0,
    })
    .then(user => {
      if (user) return user;
    });
};


const getUserByEmail = function (userEmail) {
  return User.findOne({
      email: userEmail,
    }, {
      __v: 0,
    })
    .then(user => {
      if (user) return user;
    });
};

const updateUserCurrentLocation = function (userID, currentLocation) {
  return User.findOneAndUpdate({
      _id: userID,
    }, {
      current_location: {
        loc: {
          coordinates: [currentLocation.long, currentLocation.lat]
        }
      },
    })
    .then(user => {
      if (user) return user;
    });
};



module.exports = {
  addUser: addUser,
  getUserById: getUserById,
  getUserByEmail: getUserByEmail,
  updateUserCurrentLocation: updateUserCurrentLocation
};
