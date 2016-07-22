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
      return response.data;
    });
  };

});