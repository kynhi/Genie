const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: {
    Type: String,
    require: true
  },
  details: {
    Type: String
  },
  time: {
    Type: String
  },
  location: {
    Type: String
  },
  users: []
});

var Event = mongoose.model('Event', EventSchema);

module.exports = {Event};
