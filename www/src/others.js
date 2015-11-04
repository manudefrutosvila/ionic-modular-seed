(function() {
    'use strict';

    /**
     * Check varible or object to 'is undefined', 'is empty' or 'is null'
     * @param obj
    */
    angular.isUndefinedOrNullOrEmpty = function (obj) {
        return angular.isUndefined(obj) || obj === null ||  obj.length === 0 || typeof obj === 'object' && Object.keys(obj).length === 0;
    };
})();
