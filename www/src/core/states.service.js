(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('statesService', statesService);

    function statesService() {

        var service = {
            INTRO                   : 'intro',
            LOGIN                   : 'login',
            DASHBOARD               : {
                WEB_TECHNOLOGIES    : 'dashboard.web-technologies',
                MODULAR             : 'dashboard.modular'
            }
        };

        return service;
    }
})();
