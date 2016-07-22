'use strict';

angular.module('s3DemoApp').controller('exampleCtrl', function () {
  var example = this;

  example.test = 'If you can read this, your example controller is set up correctly :)  -- bmh';
  console.log(example.test);



});