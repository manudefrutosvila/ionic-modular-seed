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
            });
    }
})();
