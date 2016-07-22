'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ImageSchema = new Schema({
  postedDate: {type: Date, default: new Date()},
  humanizePostedDate: {type: String},
  url: {type: String},
});

module.exports = mongoose.model('Image', ImageSchema);