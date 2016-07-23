'use strict';

const AWS      = require('aws-sdk');
const s3secret = require('../../config/keys/s3Keys.js');
const Image    = require('./s3.model');
const moment   = require('moment');

// YOU WILL NEED YOUR OWN S3 KEYS //
AWS.config.update({
  accessKeyId: s3secret.s3keys.accessKeyId,
  secretAccessKey: s3secret.s3keys.secretAccessKey,
  region: s3secret.s3keys.region
});

var s3 = new AWS.S3();

module.exports = {

  uploadImage: (req, res) => {

    var buf = new Buffer(req.body.imageBody.replace(/^data:image\/\w+;base64,/, ''), 'base64');

    var params = {
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
  },

  saveImageToDb: (req, res) => {
    req.body.humanizePostedDate = moment().format('MMMM Do YYYY, h:mm:ss a');

    var image = new Image(req.body);
    image.save(function (err, img) {
      if (err) {
        res.status(500);
      } else {




        console.log('<======= img =======> ', img);
        res.status(200).json(img);
      }
    })
  },

  getImages: (req, res) => {
    Image.find().lean().exec((err, allImages) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(allImages);
    })
  },

};