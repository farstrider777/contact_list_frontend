const SERVER_URL = 'https://arcane-mountain-37553.herokuapp.com';

function Add ($scope, $http, $state){
  $scope.test2 = function(){
    console.log('hi from add')
  };

//   $scope.addContact(){
// //     $http.post(`${SERVER_URL}/contacts`)
// //
// // //put info in body here from form
// //
// //     .then(resp => {
// //       $scope.contacts = resp.data;
//   };



}

Add.$inject = ['$scope', '$http', '$state'];

export default Add;
