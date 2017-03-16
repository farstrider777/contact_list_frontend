import { info } from './list';
const SERVER_URL = 'https://arcane-mountain-37553.herokuapp.com';


function Individual ($scope, $http, $state){

  function init () {
    $http.get(`${SERVER_URL}/contacts/${info}`).then(resp => {
      $scope.contact = resp.data;
    });
  }
  init();
}

Individual.$inject = ['$scope', '$http', '$state'];

export default Individual;
