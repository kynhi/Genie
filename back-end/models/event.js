const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  details: {
    type: String,
    default: 'Event',
  },
  time: {
    type: Date,
    default: new Date()
  },
  location: {
    type: String
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  users: []
});

var Event = mongoose.model('Event', EventSchema);

module.exports = {Event};
