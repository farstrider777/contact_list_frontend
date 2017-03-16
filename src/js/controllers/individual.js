
const SERVER_URL = 'https://arcane-mountain-37553.herokuapp.com';


function Individual ($scope, $http, $state){
  console.log('hello')
  console.log(contact.id)

  $scope.testclick = function (info) {
    //$state.go(`contacts`)
    console.log("hello")
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
