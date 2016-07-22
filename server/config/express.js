'use strict';

// EXPRESS //
const express    = require('express');
const session    = require('express-session');
const bodyParser = require('body-parser');
const cors       = require('cors');
const logger     = require('morgan');

module.exports = () => {
  const app = express();

  app.use(logger('dev'));
  app.use(cors());
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.use(session({
    secret: 'asdfasdfr23radsfs3rgrasdbfg2gaa121',
    resave: false,
    saveUninitialized: true
  }));

  console.log('hello from express config!');

  app.use(express.static('build'));
  return app;
};