const s3Ctrl = require('./s3.controller.js');

module.exports = function (app) {

  app.route('/api/v1/uploadImage')
    .post(s3Ctrl.saveImage); // POST IMAGE TO S3 //

};