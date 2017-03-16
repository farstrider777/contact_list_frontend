const SERVER_URL = 'https://arcane-mountain-37553.herokuapp.com';

var info = 1;

function List ($scope, $http, $state){
  $scope.contacts = [];

  function init () {
    $http.get(`${SERVER_URL}/contacts`).then(resp => {
      $scope.contacts = resp.data;
      //console.log($scope.contacts)
    });
  }

  init();

  $scope.listclick = function (id) {
    info = id;
    $scope.clickedContact = id;
    $state.go('contacts');
  };

}

List.$inject = ['$scope', '$http', '$state'];

export  { List, info };
