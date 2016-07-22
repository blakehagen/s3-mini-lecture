const s3Ctrl = require('./s3.controller.js');

module.exports = function (app) {

  app.route('/api/v1/uploadImage')
    .post(s3Ctrl.uploadImage); // POST IMAGE TO S3 //

  app.route('/api/v1/saveImageDb')
    .post(s3Ctrl.saveImageToDb); // SAVE NEW IMAGE URL TO DB //

  app.route('/api/v1/getImages')
    .get(s3Ctrl.getImages); // GET IMAGES FROM DB //

};