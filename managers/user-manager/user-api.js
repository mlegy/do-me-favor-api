const dal = require('./user-dal');

const addUser = function (user) {
  return dal.addUser(user);
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
