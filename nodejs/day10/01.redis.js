
var redis=require('redis');

var client=redis.createClient({host:'127.0.0.1',port:6379,password:3211014});

client.on('connect',function(){
  console.log("connect");
});

client.on('end',function(){
  console.log("disconnect !");
});

client.on('error',function(err){
  console.log("connect error:",err);
});

client.set("name","lisi one",function(err,reply){
  if(!err){
    console.log("set reply=",reply);//ok

    client.get("name",function(err,reply){
      if(!err){
        console.log("get reply=",reply);//lisi one

        client.del("name",function(err,reply){
          if(!err){
            console.log("del reply=",reply);//1
            client.quit();//上边提示断开链接
          }else{
            throw err;
          }
        });

      }else{
        throw err;
      }
    })

  }else{
    console.log("error=",err);
  }
});
