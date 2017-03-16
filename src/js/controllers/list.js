const SERVER_URL = 'https://arcane-mountain-37553.herokuapp.com';

var info = 1;

function List ($scope, $http, $state){
//  $scope.currentContact = null;
  $scope.contacts = [];

  function init () {
    $http.get(`${SERVER_URL}/contacts`).then(resp => {
      $scope.contacts = resp.data;
      //console.log($scope.contacts)
    });
  }

  init();

  $scope.listclick = function (id) {
    //console.log(info)
    //console.log(info)
    info = id;
    $scope.clickedContact = id;
    console.log($scope.clickedContact)
    if(id === 1){  $state.go('home');}
    if(id === 2){ $state.go('contacts');}
  };

  $scope.testclick = function () {
    //$state.go(`contacts`)
    console.log("hello")
  };

}

List.$inject = ['$scope', '$http', '$state'];

export  { List, info };
