const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
      'nom': {
        type: String,
        default: "",
        required: true
      },
      'latlng': {   
        type: [Number],
        default: "",
        required: true
      }
  });

  module.exports = mongoose.model('Location', locationSchema);