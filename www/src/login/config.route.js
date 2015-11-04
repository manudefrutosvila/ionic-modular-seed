(function() {
    'use strict';

    angular
        .module('app.login')
        .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'src/login/login.html',
                controller: 'LoginCtrl'
            });
    }
})();
