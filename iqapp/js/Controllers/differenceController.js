app.controller('differenceGameController',function($scope,$location,$rootScope,$http){

    $scope.count=0;
    $scope.showdifferenceResult=false;

    $scope.countTwo=0;
    $scope.countThree=0;
    $scope.check=function(){
        if($scope.count==3){

            $rootScope.differenceTime.push($rootScope.myStopwatch.data.min);
$rootScope.differenceOneTime=$rootScope.myStopwatch.data.min
            $rootScope.myStopwatch.reset();
            $scope.showdifferenceResult=true;
            $http.post('http://localhost:8080/api/addGameResult',{
                userName:$rootScope.userName,
                gameType:$rootScope.gameType,
                level1:$scope.differenceTime[0],
                level2:'',
                level3:''
            }).success(function(data){
               console.log('game result save success');
            }).error(function(err){
                console.log('error in game result');
            })
        }
        $scope.count++;
    }

    $scope.checkTwo=function(){
        if($scope.countTwo==2){
            $rootScope.differenceTime.push($rootScope.myStopwatch.data.min);
            $rootScope.differenceOneTime=$rootScope.myStopwatch.data.min
            $rootScope.myStopwatch.reset();
            $scope.showdifferenceResult=true;
            $http.post('http://localhost:8080/api/addGameResult',{
                userName:$rootScope.userName,
                gameType:$rootScope.gameType,
                level1:$scope.differenceTime[0],
                level2:$scope.differenceTime[1],
                level3:''
            }).success(function(data){
                console.log('game result save success');
            }).error(function(err){
                console.log('error in game result');
            });
        }
        $scope.countTwo++;
    }


$scope.checkThree=function(){
    if($scope.countThree==9){
        $rootScope.differenceTime.push($rootScope.myStopwatch.data.min);
        $rootScope.differenceOneTime=$rootScope.myStopwatch.data.min
        $rootScope.myStopwatch.reset();
        $scope.showdifferenceResult=true;
        $http.post('http://localhost:8080/api/addGameResult',{
            userName:$rootScope.userName,
            gameType:$rootScope.gameType,
            level1:$scope.differenceTime[0],
            level2:$scope.differenceTime[1],
            level3:$scope.differenceTime[2]
        }).success(function(data){
            console.log('game result save success');
        }).error(function(err){
            console.log('error in game result');
        })
    }
    $scope.countThree++;
};
    $scope.changeDifferenceUrl=function(index){
        if(index==0)
        {
            $location.url('differenceTwo');
            $rootScope.myStopwatch.start();
            $scope.showdifferenceResult=false;
        }
        if(index==1)
        {
            $rootScope.myStopwatch.start();
            $location.url('differenceThree');
            $scope.showdifferenceResult=false;
            $rootScope.buttonShow=false;
        }
        if(index==2)
        {

           $location.url('gamesPage');

        }
    }
});
