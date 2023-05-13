const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Game = new Schema({
  title: {
    type: String
  },
  year: {
    type: Number
  },
  platform: {
    type: String
  }
},{
    collection: 'Game'
});

module.exports = mongoose.model('Game', Game);