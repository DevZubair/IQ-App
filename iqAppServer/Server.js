var express=require('express');
var app=express();
var mongoose=require('mongoose');
var morgan=require('morgan');
var bodyParser=require('body-parser');
var methodOverride=require('method-override');

mongoose.connect('mongodb://Asad:abc123@ds029051.mongolab.com:29051/iqappdb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var Results=require('./result.js');
var port = process.env.PORT || 8080;        // set our port
 var router=express.Router();

app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("'Access-Control-Allow-Methods',['OPTIONS', 'GET', 'POST']");
    res.header("'Access-Control-Allow-Headers','Content-Type'");

    next();
});

app.post('/api/save',Results.saveResult);
app.post('/api/find',Results.findData);
app.post('/api/findOne',Results.findOneData);
app.post('/api/addGameResult',Results.addGameResult);
app.post('/api/update',Results.updateData);
app.post('/api/getGameResult',Results.getGameResult);
app.delete('/api/delete',Results.deleteData)




app.use('/api',router);
app.listen(port);
console.log('server is listening on 8080');
