import MainController from './main.controller';

export const mainConfig = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('app', {
            url : '/',
            template: require('@views/template.html'),
            redirectTo: 'app.dashboard'
        })
        .state('app.dashboard', {
            url: 'dashboard',
            controller: MainController,
            controllerAs: 'vm'
        });
};

mainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];