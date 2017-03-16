import { info } from './list';
const SERVER_URL = 'https://arcane-mountain-37553.herokuapp.com';


function Individual ($scope, $http, $state){

  function init () {
    $http.get(`${SERVER_URL}/contacts/${info}`).then(resp => {
      $scope.contact = resp.data;
      console.log(info)
      console.log(resp.data)
    });
  }

init();

  $scope.testclick = function () {
    //$state.go(`contacts`)
    console.log("hello2")
  };


}

Individual.$inject = ['$scope', '$http', '$state'];

export default Individual;
