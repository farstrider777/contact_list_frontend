function Config ($stateProvider, $urlRouterProvider) {

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
       url: '/add',
       templateUrl: 'templates/add.html',
       controller: 'Add'
     });

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/home');

}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
