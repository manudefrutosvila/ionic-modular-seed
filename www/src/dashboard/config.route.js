(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'src/dashboard/dashboard.html',
                controller: 'DashboardCtrl'
            })
                .state('dashboard.web-technologies', {
                    url: '/web-technologies',
                    templateUrl: 'src/dashboard/web-technologies/web-technologies.html',
                    // controller: 'IonicCtrl'
                })
                .state('dashboard.modular', {
                    url: '/modular',
                    templateUrl: 'src/dashboard/modular/modular.html',
                    // controller: 'ModularCtrl'
                });
    }
})();
