'use strict';

const babel       = require('babel-core').transform('code');
const express     = require('./server/config/express.js');
const environment = process.env.NODE_ENV;
const app         = express();
require('./server/config/db.js')();
//========//
// ROUTES //
//========//

// API TEST ROUTE //
app.get('/api/v1/test', (req, res) => {
  res.status(200).send('Light \'em up! We good to go!');
});

// S3 ROUTES //
require('./server/features/s3/s3.routes')(app);

//======//
// PORT //
//======//
const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log('Check me out on port', port);
});