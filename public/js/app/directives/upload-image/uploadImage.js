// angular.module('s3DemoApp').directive('fileread', function ($stateParams, $state) {
//   return {
//     restrict: 'A',
//     scope: {
//       email: '@',
//       image: '=',
//       clientEmail: '='
//     },
//     link: function (scope, elem, attrs) {
//       elem.bind('change', function (changeEvent) {
//
//         if (!scope.email) {
//           scope.email = scope.clientEmail;
//         }
//
//         var reader    = new FileReader();
//         reader.onload = function (loadEvent) {
//           var fileread = loadEvent.target.result;
//
//           var tempArray = elem[0].value.split('\\');
//           var fileName  = tempArray[tempArray.length - 1];
//
//
//           // imageService.storeImage(fileread, fileName, scope.email).then(function (result) {
//           //
//           //   if ($state.current.name === 'client') {
//           //     scope.$parent.client.image = result.Location;
//           //
//           //     var userObj = {
//           //       id: $stateParams.id,
//           //       image: result.Location
//           //     };
//           //
//           //     userService.updateUserImage(userObj).then(function (response) {
//           //     });
//
//             // } else {
//             //   scope.$parent.newExpert.image = result.Location;
//             // }
//           })
//             .catch(function (err) {
//               console.error(err);
//             });
//         };
//         reader.readAsDataURL(changeEvent.target.files[0]);
//       });
//     }
//   };
// });