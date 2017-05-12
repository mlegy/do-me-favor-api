const dal = require('./user-dal');

const addUser = function (user) {
  return getUserByEmail(user.email).then(foundUser => {
    if (foundUser && foundUser._id) return foundUser;
    else return dal.addUser(user);
  });
};

const getUserById = function (userId) {
  return dal.getUserById(userId);
};

const getUserByEmail = function (userEmail) {
  return dal.getUserByEmail(userEmail);
};

const updateUserLocation = function (userId, location) {
  return dal.updateUserCurrentLocation(userId, location);
};

module.exports = {
  addUser: addUser,
  getUserById: getUserById,
  getUserByEmail: getUserByEmail,
  updateUserLocation: updateUserLocation
};
