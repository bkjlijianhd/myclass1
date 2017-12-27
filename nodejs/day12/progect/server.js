var express=require('express');
var fs=require('fs');
var bodyParser=require('body-parser');
var app=express();
var path = require('path');
var mongoose = require('mongoose');
var db =mongoose.connection;

db.on('error',function(error){
  console.log(error);
});

db.on('open',function(){
  console.log("connect ok!");
});

mongoose.connect("mongodb://bkj:3211014@127.0.0.1/stus?authSource=admin", {useMongoClient: true});

var Schema = mongoose.Schema;

var stuSchema = new Schema({
  name: String,
  age: Number,
  gender: Number
});

var StuOne = mongoose.model("One", stuSchema);


app.use(express.static(__dirname+"/public"));

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}));

var options={
  root:__dirname+"/public"
};
app.get("/",function(req,res){
  res.status(200);
  res.type("text/html");
  res.sendFile("/html/homepage.html",options);
});


// StuOne.find({"feel":"good"},null,function(err,docs){
//   if(!err){
//     JSON.stringify(docs[0],function(key,value){
//       if(key==="number"){
//         docs[0]= "{" + "'"+ key + "'" + ":" + "[" +value+ "]" + "}" ;
//         console.log(docs[0]);
//       }
//       return value;
//     });
//   }else{
//     console.log(err);
//   }
// });


app.get("/data",function(req,res){
  res.status(200);
  res.type("application/json");
  //res.json({"number":["9,064,916,166","7,929,771,067","288,732,914"]});
  // res.json(docs);
  StuOne.find({"feel":"good"},null,function(err,docs){
    if(!err){
      console.log(docs);
      res.json(docs);
    }else{
      console.log(err);
    }
  });

});

  app.use(function(req,res){
    res.status(404);
    res.type("text/html");
    res.send("<h1>not found</h1>");
  });

  app.listen(8000,function(){
    console.log("listen 8000....");
  });
