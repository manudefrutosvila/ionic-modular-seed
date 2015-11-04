(function() {
    'use strict';

    angular
        .module('blocks.exception')
        .factory('exception', exception);

    function exception($q, toast, defaults) {

        var service = {
            catcher: catcher
        };

        return service;


        function catcher(response) {
            var noResponse = !angular.isUndefinedOrNullOrEmpty(response) &&
                            !angular.isUndefinedOrNullOrEmpty(response.data) &&
                            !angular.isUndefinedOrNullOrEmpty(response.data.message);
            var errorMessage = defaults.MSG_ERROR;

            if (noResponse){
                errorMessage = response.data.message;
            }

            toast.error(errorMessage);

            return $q.reject(errorMessage);
        }
    }
})();
