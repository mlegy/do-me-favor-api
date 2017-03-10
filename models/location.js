const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  x: {
    type: String,
    required: true
  },
  y: {
    type: String,
    required: true
  }
});

module.exports = locationSchema;
