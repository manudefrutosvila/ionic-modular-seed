(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginCtrl', LoginCtrl);

    function LoginCtrl($scope, $state, loginService) {

        $scope.forms = {};
        $scope.user = {};

        $scope.signIn = signIn;

        function signIn(form) {
            console.log('Sign-In', $scope.user);
            if (!form.$valid){
                return;
            }

            loginService
                .get($scope.user)
                .then(loginComplete)
                .catch(loginFail);
        }

        function loginComplete(userInfo){
            console.log('User info', userInfo);
            $scope.user = {};
            $state.go('dashboard');
        }

        function loginFail(){
            // console.log('Sign-In fail');
        }
    }
})();
