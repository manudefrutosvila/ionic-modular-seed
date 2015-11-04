(function(){
    'use strict';

    angular.module('blocks.toast')
        .factory('toast',toast);

    function toast($ionicLoading){
        
        var service = {
            error       : error,
            info        : info,
            warning     : warning,
            loading     : {
                show    : $ionicLoading.show,
                hide    : $ionicLoading.hide
            }
        };

        return service;


        function error(message){
        }

        function info(message){
        }

        function warning(message){
        }
    }
})();
