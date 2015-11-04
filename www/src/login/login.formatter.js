(function () {
    'use strict';

    angular
        .module('app.login')
        .factory('loginFormatter', loginFormatter);


    function loginFormatter() {

        var service = {
            format : format
        };

        return service;

        function format(responseData){
            return {
                userId              : responseData.data.userId,
                username            : responseData.data.username,
                email               : responseData.data.email,

                token               : responseData.headers('authorization')
            };
        }

    }
})();
