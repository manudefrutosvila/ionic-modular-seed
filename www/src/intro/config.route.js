(function() {
    'use strict';

    angular
        .module('app.intro')
        .config(moduleConfig);

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('intro', {
                url: '/',
                templateUrl: 'src/intro/intro.html',
                controller: 'IntroCtrl'
            });
    }
})();
