var EventEmitter=require('events');

var eventOne=new EventEmitter();

eventOne.once('custom_event',function(value){
  console.log("触发： ", value);//once表示只触发一次 触发后停止
});

setInterval(function(){
  eventOne.emit("custom_event",Math.floor(Math.random()*10+10));
},1000);
