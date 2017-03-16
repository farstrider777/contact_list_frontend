import angular from 'angular';
import 'angular-ui-router';

import { List } from './controllers/list';
import Individual from './controllers/individual';
import Add from './controllers/add';

import Config from './config.js';

angular
  .module('app', ['ui.router'])
  .config(Config)
  .controller('List', List)
  .controller('Individual', Individual)
  .controller('Add', Add)
  // .controller('GreetController', GreetController)
