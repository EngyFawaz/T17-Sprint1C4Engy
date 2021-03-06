var mongoose = require('mongoose');

var Engychema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  component: {
    type: String,
    trim: true,
    lowercase: true,
    required: true
  },
  seller:{
    type: String,
    trim: true,
    lowercase: true,
    required: true
  }
  
});

mongoose.model('Engy', Engychema);
