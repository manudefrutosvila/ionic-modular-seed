(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .factory('dashboardService', dashboardService);

    function dashboardService($q, $timeout) {

        var service = {
            all : all
        };

        return service;

        function all() {
            var deferred = $q.defer();

            var items = [];
            $timeout(function(){
                deferred.resolve(items);
            }, 1000);

            return deferred.promise;
        }

    }
})();
