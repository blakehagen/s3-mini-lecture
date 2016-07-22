'use strict';

const AWS      = require('aws-sdk');
const s3secret = require('../../config/keys/s3Keys.js');

AWS.config.update({
  accessKeyId: s3secret.s3keys.accessKeyId,
  secretAccessKey: s3secret.s3keys.secretAccessKey,
  region: s3secret.s3keys.region
});

var s3 = new AWS.S3();

module.exports = {

  saveImage: function (req, res) {

    var buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ''), 'base64');

    var params     = {
      Bucket: s3secret.s3keys.bucket,
      Key: req.body.imageName,
      Body: buf,
      ContentType: 'image/' + req.body.imageExtension,
      ACL: 'public-read'
    };

    s3.upload(params, function (err, data) {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(data);
    });
  }


};