const SERVER_URL = 'https://arcane-mountain-37553.herokuapp.com';


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

  $scope.listclick = function (info) {
    //console.log(info)
    //console.log(info)
    if(info === 1){  $state.go('home');}
    if(info === 2){ $state.go('contacts');}
  };

  $scope.testclick = function (info) {
    //$state.go(`contacts`)
    console.log("hello")
  };

}

List.$inject = ['$scope', '$http', '$state'];

export default List;
