var mongoose=require('mongoose');
var db =mongoose.connection;

db.on('error',function(error){
  console.log(error);
});

db.on('open',function(){
  console.log("connect ok!");
});

mongoose.connect("mongodb://127.0.0.1/stu",{useMongoClient:true});
var Schema=mongoose.Schema;

var stuSchema=new Schema({
  name:String,
  age:Number,
  gender:Number
});

var StuOne=mongoose.model("One",stuSchema);
//数据的查找
// StuOne.find({gender: 0}, { name: 1, age: 1}, {sort: {age: 1}}, function(err, docs){
//   if (!err){
//     console.log(docs);//数组
//   } else {
//     console.log(err);
//   }
//
//   db.close();
// });
StuOne.find({gender:0,age:{$gt:40}},null,function(err,docs){
  if(!err){
    console.log(docs);
  }else{
    console.log(err);
  }
    db.close();

});
