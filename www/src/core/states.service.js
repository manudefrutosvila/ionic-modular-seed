(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('statesService', statesService);

    function statesService() {

        var service = {
            INTRO       : 'intro',
            LOGIN       : 'login',
            DASHBOARD   : 'dashboard'
        };

        return service;
    }
})();
