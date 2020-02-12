import angular from 'angular';

import { default as uiRouter } from '@uirouter/angularjs';

import { mainConfig } from './main/config'

export default angular.module('app', [uiRouter])
    .config(mainConfig)
    .name