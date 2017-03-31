const User = require('../models/user');

const addUser = function (user) {
  const newUser = User({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    current_location: user.current_location,
    avatar: user.avatar,
    last_seen: +new Date(),
    created_at: +new Date(),
    updated_at: +new Date()
  });
  return newUser.save();
};

const getUserById = function (userID) {
  return User.findOne({
      _id: user,
    }, {
      __v: 0,
    })
    .then(user => {
      if (user) return user;
    });
};


const getUserByEnail = function (userEmail) {
  return User.findOne({
      userEmail: userEmail,
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
      current_location: currentLocation,
    })
    .then(user => {
      if (user) return user;
    });
};



module.exports = {
  addUser: addUser,
  getUserById: getUserById,
  getUserByEnail: getUserByEnail,
  updateUserCurrentLocation: updateUserCurrentLocation
};
