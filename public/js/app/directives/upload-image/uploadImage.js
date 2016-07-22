angular.module('s3DemoApp').directive('fileread', function ($stateParams, $state, imageService) {
  return {
    restrict: 'A',
    scope: {
      email: '@',
      image: '=',
      clientEmail: '='
    },
    link: function (scope, elem, attrs) {
      elem.bind('change', function (changeEvent) {

        console.log('elem', elem);

        var reader    = new FileReader();
        reader.onload = function (loadEvent) {
          var fileread = loadEvent.target.result;

          console.log(elem[0].value );

          var tempArray = elem[0].value.split('\\');
          var fileName  = tempArray[tempArray.length - 1];

          // console.log('fileread', fileread);
          // console.log('tempArray', tempArray);
          // console.log('fileName', fileName);


          imageService.storeImage(fileread, fileName).then(function (result) {
            console.log('result', result);
            if(result.status === 200){

              var imgData = {
                url: result.data.Location
              };

              imageService.saveImageToDb(imgData).then(function (response) {
                console.log('response', response);
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