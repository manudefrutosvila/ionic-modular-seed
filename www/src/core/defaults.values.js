(function () {
    'use strict';

    angular
        .module('app.core')

        .value('version', '0.0.1')

        .value('defaults', {
            // APP_ID              : '',
            // LANGUAGE            : 'ES_ES',
            // CURRENCY            : 'EUR',
            // PAGINATION          : {
            //     ITEMS_PER_PAGE  : 5
            // }
            ERROR_MSG           : 'Unexpected error'
        });
})();
