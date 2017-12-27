
//属于stream流
// 'end' 事件将在流中再没有数据可供消费时触发。

//process.stdin 标准输入
process.stdin.setEncoding("utf8");//设置输入的字符编码格式

process.stdout.write("please input>>");
//process.stdout标准输出


// process.stdin.on('readable',function(){
//   //readable, 代表有数据输入，数据可读
//   var chunk=process.stdin.read(); //readable只可以读要取出还要用read（）
//   //read读取数据
//   if (chunk !=null){
//     console.log(chunk);
//     process.stdout.write("please input>>");
//   }
// });

//数据读取完毕
  process.stdin.on('data',function(chunk){
  process.stdout.write(chunk);
  process.stdout.write("please input>>");
});
//输完后直接读好

process.stdin.on('end',function(){
  console.log('input end...');
});

//这里看不到触发
//'end' 事件将在流中再没有数据可供消费时触发。
//'end' 事件只有在数据被完全消费后 才会触发 。
// 可以在数据被完全消费后，通过将流转换到 flowing 模式，
//  或反复调用 stream.read() 方法来实现这一点。
