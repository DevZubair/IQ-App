var puzzle = angular.module('puzzleApp', ['slidingPuzzle','ngFacebook','ui.bootstrap']);
puzzle.config(function($httpProvider,$facebookProvider){
//Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header containing XMLHttpRequest used to identify ajax call
    //that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

});
// puzzle types
var types = [
    { id: 'sliding-puzzle', title: 'Sliding puzzle' },
    { id: 'word-search-puzzle', title: 'Word search puzzle' }
];


puzzle.run(function($rootScope, $route, $filter) {
    $rootScope.types = types;
    $rootScope.type = types[0].id;

    // set type on route change

});

puzzle.constant('SW_DELAI', 1000);
puzzle.factory('stopwatch', function (SW_DELAI,$timeout) {
    var data = {
            min:0,
            value: 0,
            laps: []
        },
        stopwatch = null;

    var start = function () {;
        stopwatch = $timeout(function() {
            if(data.value==59){
                data.min++;
                data.value=0;
            }
            data.value++;
            start();
        }, SW_DELAI);
    };

    var stop = function () {
        $timeout.cancel(stopwatch);
        stopwatch = null;
    };

    var reset = function () {
        stop()
        data.min=0;
        data.value = 0;
        data.laps = [];
    };

    var lap = function () {
        data.laps.push(data.value);
    };

    return {
        data: data,
        start: start,
        stop: stop,
        reset: reset,
        lap: lap
    };
});
puzzle.controller('slidingAdvancedCtrl', function($scope,$rootScope,$modal,$location,$http) {
    $scope.mainPuzzle=true;
    $rootScope.myStopwatch.data.value=0;
$scope.buttonShow=true;
    $scope.puzzleTime=[];
    $scope.showPuzzleResult=false;
    $scope.size="3x3";
    $scope.count=0;
    $scope.testSliding = {};
    $scope.src="img/burj.jpg";
    $scope.puzzles = [
        { src: './img/misko.jpg', title: 'Miško Hevery', rows: 4, cols: 4 },
        { src: './img/igor.jpg', title: 'Igor Minár', rows: 3, cols: 3 },
        { src: './img/vojta.jpg', title: 'Vojta Jína', rows: 4, cols: 3 }
    ];
    $scope.onePuzzleTime=0;
    $scope.dialog=function() {
        $scope.mainPuzzle=false;
        $scope.onePuzzleTime=$rootScope.myStopwatch.data.value;
        $scope.puzzleTime.push($rootScope.myStopwatch.data.min);
if($scope.puzzleTime.length==1){
    $http.post('http://localhost:8080/api/addGameResult',{
        userName:$rootScope.userName,
        gameType:$rootScope.gameType,
        level1:$scope.puzzleTime[0],
        level2:'',
        level3:''
    }).success(function(data){
        console.log('game result save success');
    }).error(function(err){
        console.log('error in game result');
    })
}
        if($scope.puzzleTime.length==2){
            $http.post('http://localhost:8080/api/addGameResult',{
                userName:$rootScope.userName,
                gameType:$rootScope.gameType,
                level1:$scope.puzzleTime[0],
                level2:$scope.puzzleTime[1],
                level3:''
            }).success(function(data){
                console.log('game result save success');
            }).error(function(err){
                console.log('error in game result');
            })
        }
        if($scope.puzzleTime.length==3){
            $http.post('http://localhost:8080/api/addGameResult',{
                userName:$rootScope.userName,
                gameType:$rootScope.gameType,
                level1:$scope.puzzleTime[0],
                level2:$scope.puzzleTime[1],
                level3:$scope.puzzleTime[2]
            }).success(function(data){
               $rootScope.gameResultData=data;
            }).error(function(err){
                console.log('error in game result');
            })
        }
        $rootScope.myStopwatch.reset();

       $scope.showPuzzleResult=true;

    };



    $scope.changePuzzle=function(){


        if($scope.count==0){
            $scope.src="img/tom.jpg";
            $scope.size="4x4";
            $rootScope.myStopwatch.start();


        }
        if($scope.count==1){
            $scope.size="5x5";
            $scope.src="img/scenery.jpg";
            $rootScope.myStopwatch.start();
           $scope.buttonShow=false;

        }
        if($scope.count==2){

            $location.url('/gamesPage');
        }
        $scope.mainPuzzle=true;
        $scope.showPuzzleResult=false;
        $scope.count++;

    };



});
