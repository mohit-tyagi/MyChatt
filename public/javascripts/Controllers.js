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

    .when('/setting', {
        templateUrl : 'setting.html',
        controller  : 'settingController'
    });
});


crosswordController.controller('mainController', ['$scope', '$http',
        function ($scope, $http) {
           $scope.person = [];
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



/*

crosswordController.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.person={};
    $scope.person.name = 'Mohit Tyagi';
    $scope.person.pageHead = 'Home';
    $scope.person.message = 'Everyone come and see how good I look!';
    $scope.person.pageMessage = 'on main page';

});
*/




crosswordController.controller('homeController', function($scope) {
    // create a message to display in our view
    $scope.person.pageHead = 'Home';


});


crosswordController.controller('profileController', function($scope) {
    $scope.person.pageHead = 'Profile';




});

crosswordController.controller('friendsController', function($scope) {
    $scope.person.pageHead = 'Friends';

});
crosswordController.controller('settingController', function($scope) {
    $scope.person.pageHead = 'Settings';

});


/*

crosswordController.controller('usersController', ['$scope', '$http',
    function ($scope, $http) {
        console.log(">>>Looking fo the users data...")
        $scope.users = [];
        $http.get('http://localhost:5000/user').
            success(function (data, status, headers, config) {
                $scope.users = data;
                ///console.log(status);
            }).
            error(function (data, status, headers, config) {

            });


        //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

        $scope.userInsert = function () {
            var newData={uid:$scope.uid,name:$scope.name,age:$scope.age};
            $http.post('http://localhost:5000/user', newData).success(function(status){
                $scope.users.push(newData);
                console.log('data insert');
                alert('hello Dear'+status);
                $scope.reset();
                */
/*$scope.uid="";
                 $scope.name="";
                 $scope.age="";
                 */
 /*
// $scope.$apply();

            }).error(function (data, status, headers, config) {
                alert('error');
                console.log('in err');

            });;

        }
        $scope.reset = function () {
            $scope.uid="";
            $scope.name="";
            $scope.age="";
        }
        $scope.userDelete = function (userid,index) {
            // console.log(userid,"      =-=-=-     ",index);

            alert ("Are you sure");
            $http.delete('http://localhost:5000/user'+"/"+userid).success(function(a,b,c){
                alert(a,'   ',b,'   ',c);
                console.log('data deleted');

            });

        }
    }]);

*/
