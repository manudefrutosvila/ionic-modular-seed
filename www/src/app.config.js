(function() {
    'use strict';

    angular.module('app')

    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });

})();
