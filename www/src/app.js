(function() {
    'use strict';

    var angularModules = [
        'ionic',
        // 'ngStorage',
        // 'ngCordova',
        // 'ngMessages',
        // 'ngAria'
    ];

    var thirdPartyModules = [
        // 'gettext',
        // 'validation.match',
        // 'ngMaterial'
    ];

    var featureModules = [
        'app.core',
        'app.intro',
        'app.login',
        'app.dashboard'
    ];

    var modules = angularModules.concat(thirdPartyModules, featureModules);

    angular.module('app', modules);
})();
