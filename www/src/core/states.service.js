(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('statesService', statesService);

    function statesService() {

        var service = {
            INTRO   : 'intro',
            LOGIN   : 'login',
            HOME    : 'home'
        };

        return service;
    }
})();
