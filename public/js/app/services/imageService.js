angular.module('s3DemoApp').service('imageService', function ($http) {

  this.storeImage = function (imageData, fileName) {

    var imageExtension = imageData.split(';')[0].split('/');
    imageExtension     = imageExtension[imageExtension.length - 1];

    var newImage = {
      imageName: fileName,
      imageBody: imageData,
      imageExtension: imageExtension
    };

    return $http({
      method: 'POST',
      url: '/api/v1/uploadImage',
      data: newImage
    }).then(function (response) {
      return response;
    });
  };
  
  this.saveImageToDb = function (imgData) {
    return $http({
      method: 'POST',
      url: '/api/v1/saveImageDb',
      data: imgData
    }).then(function (response) {
      return response.data;
    });
  };

  this.getImages = function () {
    return $http({
      method: 'GET',
      url: '/api/v1/getImages'
    }).then(function (response) {
      return response.data;
    });
  };

});