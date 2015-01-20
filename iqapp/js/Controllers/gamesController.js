app.controller('gamesController',function($scope,$rootScope,$location,stopwatch,$http){
    $rootScope.differenceOneTime='';
    $rootScope.resultType=''
    $rootScope.buttonShow=true;
    $rootScope.gameType='';
    $rootScope.myStopwatch=stopwatch;
    $rootScope.gameResultData='';
$rootScope.gameClockTime=10;
    $scope.gameType='';
$rootScope.differenceTime=[];
    $scope.changeTime=function(a){
        if(a==0){
            $rootScope.gameClockTime--;
        }
        else
        {
            $rootScope.gameClockTime++;
        }
    };
    $scope.changeGameType=function(type){
        $scope.gameType=type;


    };
    $scope.resultPage=function(type){
        if(type=='difference'){
            $rootScope.resultType='Spot The Difference'
        }
        else{
            $rootScope.resultType='Puzzle'
        }
        $rootScope.gameType=type;
        $http.post('http://localhost:8080/api/getGameResult',{gameType:$rootScope.gameType}).success(function(data){
            $rootScope.gameResultData=data;
            $location.url('gameResult');
        }).error(function(err){
            console.log('error in fetching game result data');
        });

    }
    $scope.changeUrl=function(){

if($scope.gameType=='puzzle' ) {
    $location.path('/puzzle');
    $rootScope.gameType='puzzle';
    $rootScope.myStopwatch.data.value=0;
    $rootScope.myStopwatch.start();
    //$('#gamesModal').removeClass('fade');
   // $('#gamesModal').modal('hide');
    $('#gamesModal').remove();
}
else {
    $location.path('/difference');
    $rootScope.gameType='difference';
    $rootScope.myStopwatch.data.value=0;
    $rootScope.myStopwatch.start();
    //$('#gamesModal').modal('hide')
    $('#gamesModal').remove()
}


   };


});