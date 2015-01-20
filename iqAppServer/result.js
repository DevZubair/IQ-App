var mongoose     = require('mongoose');

var resultSchema = new mongoose.Schema({
    userName : String,
    questionsSelected:String,
    questionsCorrect:String,
    percentage: String,
    testID: String
});

var gameResult=new mongoose.Schema({
    userName:String,
    gameType:String,
    level1:String,
    level2:String,
    level3:String

});
var Result = mongoose.model('Result',resultSchema);
var playerResults=mongoose.model('gameResult',gameResult);

module.exports.saveResult = function(req,res){


    var resultData = req.body;

   Result.update({testID:resultData.testID,userName:resultData.userName},{ questionsSelected:resultData.questionsSelected,
       questionsCorrect:resultData.questionsCorrect,
       percentage:resultData.percentage},function(err,data){

       if(data==1){
           console.log(err)
       }
       if(data==0){
           var result_info=new Result({
               userName:resultData.userName,
               questionsSelected:resultData.questionsSelected,
               questionsCorrect:resultData.questionsCorrect,
               percentage:resultData.percentage,
               testID:resultData.testID
           });

           result_info.save(function(err,data){
                   if(err){
                       res.send(err);
                   }
                   else
                   {
                       res.send(data);
                   }
               }
           )
       }
   });

}


module.exports.findData=function(req,res){

    Result.find({testID:req.body.type},function(err,data){
        if(err){
            res.send(err);
        }
        else
        {
            res.send(data)
        }
    })
}

module.exports.findOneData=function(req,res){
    Result.findOne({userName:req.body.name},function(err,data){
        if(err){
            res.send(err)
        }
        else
        {
            res.send(data)
        }
    })
}
module.exports.updateData=function(req,res){
    Result.update({userName:req.body.name},{$set:{userName:req.body.newName}},false,true);
    Result.find(function(err,data){
        if(err){
            res.send(err);
        }
        else
        {
            res.send(data)
        }
    })
}

module.exports.deleteData=function(req,res){
    Result.remove({userName:req.body.name},function(err,data){
        if(err){
            res.send(err)
        }
    })
    Result.find(function(err,data){
        if(err){
            res.send(err);
        }
        else
        {
            res.send(data)
        }
    })
};

module.exports.addGameResult=function(req,res){
    var resultData=req.body;
    playerResults.update({userName:resultData.userName,gameType:resultData.gameType},{level1:resultData.level1,level2:resultData.level2,level3:resultData.level3},function(err,data){
       if(data==1){
           console.log('update success')
       }
        if(data==0){
            var saveGame=new playerResults({
                userName:resultData.userName,
                gameType:resultData.gameType,
                level1:resultData.level1,
                level2:resultData.level2,
                level3:resultData.level3

            });

            saveGame.save(function(err,data){
                    if(err){
                        res.send(err);
                    }
                    else
                    {
                        res.send(data);
                    }
                }
            )

        }
    });
    };



module.exports.getGameResult=function(req,res){
    var resultData=req.body;
    playerResults.find({gameType:resultData.gameType},function(data,err){
        if(data){
            res.send(data);
        }
        if(err){
            res.send(err);
        }
    })




}