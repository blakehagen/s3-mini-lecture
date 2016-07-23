angular.module('s3DemoApp').directive('fileread', function ($stateParams, $state, imageService) {
  return {
    restrict: 'A',
    scope: {
      images: '=',
    },
    link: function (scope, elem, attrs) {
      elem.bind('change', function (changeEvent) {

        var reader    = new FileReader();
        reader.onload = function (loadEvent) {
          var fileread = loadEvent.target.result;

          var tempArray = elem[0].value.split('\\');
          var fileName  = tempArray[tempArray.length - 1];

          // SEND UPLOADED IMAGE DATA TO S3 //
          imageService.storeImage(fileread, fileName).then(function (result) {
            if(result.status === 200){

              // SEND NEW S3 URL TO DB //
              var imgData = {
                url: result.data.Location
              };

              imageService.saveImageToDb(imgData).then(function (response) {
                console.log('response', response);

                // GET ALL IMAGES IN DB AND SEND VIA BINDING TO TMPL TO DISPLAY //
                imageService.getImages().then(function (response) {
                  scope.images = response;
                });
              });
            }
          })
            .catch(function (err) {
              console.error(err);
            });
        };
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  };
});