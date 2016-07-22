'use strict';

// DB CONFIG //
var mongoose = require('mongoose');
var mongoURI = 'mongodb://admin:admin@ds027145.mlab.com:27145/s3-demo-app';

module.exports = function () {
  mongoose.connect(mongoURI);
  mongoose.connection.once('open', function () {
    console.log('Connected to mongoDB at', mongoURI);
  })
};