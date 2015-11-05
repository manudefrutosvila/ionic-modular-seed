(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardCtrl', DashboardCtrl);

    function DashboardCtrl($scope, $ionicNavBarDelegate, dashboardService) {
        $ionicNavBarDelegate.showBackButton(false);
    }
})();
