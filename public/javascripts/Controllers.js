var crosswordController = angular.module('MainCtrl', ['ngRoute']);

// configure our routes


crosswordController.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/home', {
            templateUrl : 'home.html',
            controller  : 'mainController'
        })



        // route for the about page
        .when('/userProfile', {
            templateUrl : 'userProfile.html',
            controller  : 'profileController'
        })

        // route for the contact page
        .when('/friends', {
            templateUrl : 'friends.html',
            controller  : 'friendsController'
        })
        .when('/user', {
            templateUrl : 'userList.html',
            controller  : 'userController'
        })

    .when('/setting', {
        templateUrl : 'setting.html',
        controller  : 'settingController'
    });
});


crosswordController.controller('mainController', ['$scope', '$http',
        function ($scope, $http) {
           $scope.person = [];
            $scope.person.pageHead = 'Home';

            //console.log(window.localStorage.getItem("mySharedData"));
           //var unm= window.localStorage.getItem("mySharedData");
            $http({method:'get',url:'http://localhost:5000/session'}).success(function (username,status){ if(username){

                $http({method: 'GET', url: 'http://localhost:5000/user/'+username}).
                    success(function (data, status, headers, config) {
                        $scope.person = data;
                        console.log(data);
                    }).
                    error(function (data, status, headers, config) {

                    });


            }});

            // get session name or id


        }
    ]);




crosswordController.controller('userController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.person.pageHead = 'User List';

        $http({method: 'get', url: 'http://localhost:5000/user'}).
            success(function (data, status) {
                $scope.person.users=data;
                //console.log(data);

            });


    }
]);


crosswordController.controller('profileController', function($scope) {
    $scope.person.pageHead = 'Profile';

});

crosswordController.controller('friendsController', function($scope) {
    $scope.person.pageHead = 'Friends';

});

crosswordController.controller('settingController', function($scope) {
    $scope.person.pageHead = 'Settings';


});
