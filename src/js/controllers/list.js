const SERVER_URL = 'https://arcane-mountain-37553.herokuapp.com';


function List ($scope, $http){
  console.log($scope);

  $scope.currentContact = null;
  $scope.contacts = [];

  function init () {
    $http.get(`${SERVER_URL}/contacts/?1`).then(resp => {
      $scope.contacts = resp.data;
    });
  }

  init();

}

List.$inject = ['$scope'];

export default List;
