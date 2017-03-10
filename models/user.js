const mongoose = require('mongoose');
const LocationSchema = require('./location');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  current_location: {
    type: LocationSchema,
    required: true
  },
  frequents_location: [LocationSchema],
  avatar: String,
  favors: [{
    type: Schema.ObjectId,
    ref: 'Favor'
  }],
  following: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  followers: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  last_seen: Date,
  created_at: Date,
  updated_at: Date
});

const User = mongoose.model('User', userSchema);

module.exports = User;
