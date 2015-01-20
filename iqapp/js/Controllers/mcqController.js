app.controller('mcqController',function($scope,$rootScope,mainService,$location,$http){

    $rootScope.progressFail=false;
    $rootScope.progress=false;
    $rootScope.progressSuccess=false;
    $rootScope.resultPercentage='';
    $rootScope.mainMcqResult='';
    $scope.data=mainService.getQuestionData();
    $rootScope.questionType=0;
    $rootScope.clockTime=10;
    $scope.changeTime=function(a){
        if(a==0){
            $rootScope.clockTime--;
        }
        else
        {
            $rootScope.clockTime++;
        }
    };
    $scope.updateQuestionType=function(typename){
        $rootScope.questionType=typename;

    }
    $rootScope.numberOfQuestions=1;


    $scope.changeUrl=function(){


        $location.path('/programmingPage');


        $('#myModal').remove();






    };
    $scope.pageClass = 'page-about';


    $scope.resultShownFunction=function(type){

$http.post('http://localhost:8080/api/find',{type:type}).success(function(data){
   $rootScope.mainMcqResult=data;
    $location.url('mainMcqResult');
}).error(function(err){
    console.log(err);
})


    }

});