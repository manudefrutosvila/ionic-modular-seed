(function () {
    'use strict';

    angular
        .module('app.intro')
        .factory('introService', introService);

    function introService($localStorage) {

        var service = {
            hasDoneIntro : hasDoneIntro,
            hide : hide,
            show : show
        };

        return service;

        function hasDoneIntro() {
            return $localStorage.introDone;
        }

        function hide() {
            $localStorage.introDone = true;
        }

        function show() {
            $localStorage.introDone = false;
        }
    }
})();
