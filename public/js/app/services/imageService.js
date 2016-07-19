angular.module('s3DemoApp').service('imageService', function ($http) {

  console.log('hello from the image service');

  this.test = function () {
    return 'hello im a service';
  };

});