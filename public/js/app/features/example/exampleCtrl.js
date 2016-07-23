'use strict';

angular.module('s3DemoApp').controller('exampleCtrl', function (imageService) {
  var example = this;

  example.getImages = function () {
    imageService.getImages().then(function (response) {
      example.images = response;
    });
  };

  example.getImages();




});