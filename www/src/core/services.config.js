(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('servicesConfig', servicesConfig);

    function servicesConfig(servicesUrlConfig){

        var url = servicesUrlConfig;

        var config = {
            users : {
                login : url + 'users/login/'
                // create : url + 'users',
                // get : function(id) { return url + 'users/' + id; },
            }
        };
        return config;
    }
})();
