const SERVER_URL = 'https://arcane-mountain-37553.herokuapp.com';

function Add ($scope, $http, $state){
  $scope.test2 = function(){
    console.log('hi from add')
  }
}

Add.$inject = ['$scope', '$http', '$state'];

export default Add;
