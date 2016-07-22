'use strict';

angular.module('s3DemoApp').controller('exampleCtrl', function (imageService) {
  var example = this;

  example.test = 'If you can read this, your example controller is set up correctly :)  -- bmh';
  console.log(example.test);

  example.getImages = function () {
    imageService.getImages().then(function (response) {
      console.log('response', response);
      console.log('response.length', response.length);
      example.images = response;
    });
  };

  example.getImages();



});