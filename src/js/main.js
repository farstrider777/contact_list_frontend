import angular from 'angular';
import 'angular-ui-router';

import List from './controllers/list';

import Config from './config.js';

angular
  .module('app', ['ui.router'])
  .controller('List', List);
  // .controller('LikeCounter', LikeCounter)
  // .controller('GreetController', GreetController)
