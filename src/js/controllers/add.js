const SERVER_URL = 'https://arcane-mountain-37553.herokuapp.com';

function Add ($scope, $http, $state){

  $scope.addContact = function (data) {
     var url = `${SERVER_URL}/contacts`;
     $http.post(url, data).then(resp => {
       $state.go('home');
     });
   };
}

Add.$inject = ['$scope', '$http', '$state'];

export default Add;
