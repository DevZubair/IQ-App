
app.controller('mcqQuestionController',function($scope,$rootScope,mainService,$location,$http){


    var isStopped = false, timer, addEvents;

    $scope.timerStatus = '';
    $scope.startStatus = 'Stop';

    $rootScope.$on('timer_initialized', function() {
        timer = angular.element('.timer').scope();
        addEvents();
    });

    addEvents = function() {
        timer.$on('timer_started', function() {
            console.log('timer started');
            $scope.startStatus = 'Stop';
            $scope.timerStatus = 'Started';
            isStopped = false;
        });

        timer.$on('timer_stopped', function() {
            $scope.startStatus = 'Start';
            $scope.timerStatus = 'Stopped';
            isStopped = true;
        });

        timer.$on('timer_ended', function() {
            $scope.startStatus = 'Start';
            $scope.timerStatus = 'Timer Ended!';
            isStopped = true;
        });
    };



    $scope.toggleStop = function() {
        timer[isStopped? 'start': 'stop']();
    };
    //Timer Controller End
    $rootScope.data=mainService.getQuestionData()[$rootScope.questionType];
    $scope.questionNumber=1;
    $scope.userAnswer='';
    $rootScope.correctUserAnswer=0;
    $scope.incorrectUserAnswer=0;
    $scope.resultPercentage=0;
    $rootScope.resultMessage="";
    $rootScope.resultStatus="";
    $rootScope.progressClass='';


    $scope.changeQuestion=function(){

        if($scope.userAnswer==$scope.data.correctAnswer[$scope.questionNumber]){
            $rootScope.correctUserAnswer++;

        }
        else
        {
            $scope.incorrectUserAnswer++;
        }

        if( $scope.questionNumber<$rootScope.numberOfQuestions){
            $scope.questionNumber++;
        }

        else{


            $rootScope.resultPercentage=Math.round(($rootScope.correctUserAnswer*100)/$rootScope.numberOfQuestions);
            $http.post('http://localhost:8080/api/save',{
                userName:$rootScope.userName,
                questionsSelected:$rootScope.numberOfQuestions,
                questionsCorrect:$rootScope.correctUserAnswer,
                percentage:$rootScope.resultPercentage,
                testID:$rootScope.data.Title

            }).success(function(data){
                console.log('data success');

            }).error(function(err){
               console.log('data error')
            });

            if($rootScope.resultPercentage<33)
            {
               $rootScope.progressClass='progress progress-bar-striped progress-bar-danger';
               //$rootScope.progressSuccess=false;
              // $rootScope.progress=false;
                $rootScope.resultMessage="Sorry";
                $rootScope.resultStatus="Failed";

                $location.url('/resultPage');
            }
            if($rootScope.resultPercentage>33&&$rootScope.resultPercentage<60)
            {
                $rootScope.progressClass='progress progress-bar-striped progress-bar';
                $rootScope.resultMessage="Congratulations";
                $rootScope.resultStatus="Passed";

                $location.url('/resultPage');
            }
            if($rootScope.resultPercentage>60){
                $rootScope.progressClass='progress progress-bar-striped progress-bar-success';
                $rootScope.resultMessage="Hooray";
                $rootScope.resultStatus="Passed";
                $location.url('/resultPage');
            }



        }




    }












})