function Config ($stateProvider, $urlRouterProvider) {
  console.log($stateProvider);
  console.log($urlRouterProvider);

  $stateProvider
     .state('home', {
       url: '/home',
       templateUrl: 'templates/home.html',
     })
     .state('contacts', {
       url: '/contacts/individual',
       templateUrl: 'templates/individual.html',
       controller: 'Individual'
     })
     .state('add', {
       url: 'add',
       templateUrl: 'templates/add.html',
       controller: 'Add'
     })

}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
