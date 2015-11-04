(function () {
    'use strict';

    angular
        .module('app.login')
        .factory('loginService', loginService);

    function loginService($q, $timeout, servicesConfig, exception, loginFormatter) {

        var service = {
            get : get
        };

        return service;

        function get(user){
            var params = {
                username : user.username,
                password : user.password
            };

            // return $http.post(servicesConfig.users.login, params)
            return httpMock(servicesConfig.users.login, params)
                .then(getUserComplete)
                .catch(exception.catcher);

        }

        function httpMock(url, data){
            var deferred = $q.defer();

            var userDataMock = {
                data : {
                    'userId': 1,
                    'username': data.username,
                    'email': 'aUser@aDomain.com'
                },
                headers: function(authorization){
                    var token = '10106DFE-0092-39D7-902F-DC5969066FBF';
                    return token;
                }
            };

            $timeout(function(){
                deferred.resolve(userDataMock);
            }, 1000);

            return deferred.promise;
        }

        function getUserComplete(responseData){
            var loginInfo = loginFormatter.format(responseData);
            return loginInfo;
        }
    }
})();
