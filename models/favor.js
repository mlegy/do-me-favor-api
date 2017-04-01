const mongoose = require('mongoose');
const LocationSchema = require('./location');
const Schema = mongoose.Schema;

const favorschema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  location: {
    type: LocationSchema,
    required: true
  },
  benefactor: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  is_done: {
    type: Boolean,
    required: true,
    default: false
  },
  created_at: Date,
  updated_at: Date
});

favorschema.index({
  'location': '2dsphere'
});

const Favor = mongoose.model('Favor', favorschema);

module.exports = Favor;
