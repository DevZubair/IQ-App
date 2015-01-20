
var app=angular.module('app',['ngRoute','puzzleApp', 'ngAnimate','ngResource', 'components','ngFacebook','ui.bootstrap']).

   run(function(){
        //Code starts for Web Facebook Login

        (function(){
            // If we've already installed the SDK, we're done
            if (document.getElementById('facebook-jssdk')) {return;}

            // Get the first script element, which we'll use to find the parent node
            var firstScriptElement = document.getElementsByTagName('script')[0];

            // Create a new script element and set its id
            var facebookJS = document.createElement('script');
            facebookJS.id = 'facebook-jssdk';

            // Set the new script's source to the source of the Facebook JS SDK
            facebookJS.src = 'http://connect.facebook.net/en_US/all.js';

            // Insert the Facebook JS SDK into the DOM
            firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
        }());

    })
//SDK ends for Web Facebook Login


    .config(
        function($routeProvider,$facebookProvider) {

            $facebookProvider.setAppId('1436960353260812');
            $facebookProvider.setVersion("v2.2");
//Routing

            $routeProvider.
                when('/', {

                    controller: 'home'
                }).
                when('/mcqs', {
                    templateUrl: 'Templates/home.html',
                    controller: 'home'
                }).
                when('/games', {
                    templateUrl: 'Templates/home.html',
                    controller: 'home'
                }).
                when('/difference', {
                    templateUrl: 'Templates/differenceOne.html',
                    controller: 'differenceGameController'
                }).
                when('/differenceTwo', {
                    templateUrl: 'Templates/differenceTwo.html',
                    controller: 'differenceGameController'
                })
                . when('/differenceThree', {
                    templateUrl: 'Templates/differenceThree.html',
                    controller: 'differenceGameController'
                })
                .when('/mainMcqResult', {
                    templateUrl: 'Templates/mainMcqResult.html'

                })

                .when('/puzzle', {
                    templateUrl: 'Templates/puzzle.html',
                    controller: 'slidingAdvancedCtrl'
                }).

                when('/home', {
                    templateUrl: 'Templates/home.html',
                    controller: 'home'
                }).

                when('/programmingPage', {
                    templateUrl: 'Templates/quizPage.html',
                    controller: 'mcqQuestionController'
                }).
                when('/mcqsPage', {
                    templateUrl: 'Templates/MCQs.html',
                    controller: 'mcqController'

                }).
                when('/gamesPage', {
                    templateUrl: 'Templates/gamesPage.html',
                    controller: 'gamesController'

                }).
                when('/resultPage', {
                    templateUrl: 'Templates/resultPage.html',
                    controller: 'resultController'

                })
                .when('/gameResult', {
                templateUrl: 'Templates/gamesResult.html'


            })

        });

app.controller('home',function($scope,$rootScope){

    $scope.pageClass = 'page-home';
    $rootScope.gamePlayer=false;

$rootScope.gameResults='';

    $rootScope.allDataHide=true;


});

app.controller('loginController',function($scope,$rootScope,$facebook,$location){


    $rootScope.allDataHide=false;


    //For Web Facebook Login
$scope.logout=function(){
    $facebook.logout().then(function() {
            $rootScope.allDataHide=false;
            $location.url('/');
            refresh();


    }
    )
};


    $scope.login = function() {
        $facebook.login().then(function() {
            refresh();


        });
    };

    function refresh() {
        $facebook.api("/me").then(
            function(response) {
                $scope.welcomeMsg = "Welcome " + response.name;
                $rootScope.userName=response.name;
                $rootScope.allDataHide=true;


                $scope.isLoggedIn = true;
                console.log('successful');

                $location.url('home')




            },
            function(err) {

                $scope.welcomeMsg = "Please log in";
                $rootScope.allDataHide=false;
            }

        )

    }


    refresh();

});

