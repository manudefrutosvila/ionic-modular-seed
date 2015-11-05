(function() {
    'use strict';

    var reusableCrossAppModules = [
        'blocks.toast',
        'blocks.exception',
        // 'components.hello',
    ];

    angular.module('app.core', reusableCrossAppModules);
})();
