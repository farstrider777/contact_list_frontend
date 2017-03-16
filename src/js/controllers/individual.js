import { info } from './list';
const SERVER_URL = 'https://arcane-mountain-37553.herokuapp.com';


function Individual ($scope, $http, $state){
  console.log('hello')
  console.log($scope.clickedContact)
  console.log(info)

  function init () {
    $http.get(`${SERVER_URL}/contacts/${info}`).then(resp => {
      $scope.contact = resp.data;
      console.log(info)
      console.log($scope.contact)
    });
    //console.log($scope.contact)
  }

  $scope.testclick = function () {
    //$state.go(`contacts`)
    console.log("hello2")
  };



  //console.log($scope);a
  //
  // $scope.currentContact = null;
  // $scope.contacts = [];
  //
  // function init () {
  //   $http.get(`${SERVER_URL}/contacts`).then(resp => {
  //     $scope.contacts = resp.data;
  //     //console.log($scope.contacts)
  //   });
  // }
  //
  // init();
  //
  // $scope.listclick = function (info) {
  //   //console.log(info)
  //   //console.log(info)
  //   //$state.go('home');
  //   $state.go(`contacts`)
  // };

}

Individual.$inject = ['$scope', '$http', '$state'];

export default Individual;
