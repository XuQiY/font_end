var http=require('http');
var fs=require('fs');
//创建服务器
var server=http.createServer();

//服务器启动
server.on('request',function (request,respone) {
  console.log('收到客户端请求'+request.url);
  var url=request.url;
  console.log(url);
  if(url==="/"){
    respone.write("hello");
    respone.write("nodejs");
    respone.end();
  };
  if(url==="/plain"){
    respone.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    //respone.setHeader ("Content-Type","text/plain;charset=utf-8");
    respone.write("你好node！");
    respone.end();
  }
  if(url==="/index"){
    fs.readFile("../grid布局.html",function (error,data) {
      var index=data.toString();
      respone.setHeader("Content-Type","text/html;charset=utf-8");
      respone.write(index);
      respone.end();
    })
  }
  else{

   console.log(`请求${url}失败`);
  }
  
});

//绑定端口号，监听
server.listen(8088,function () {
  console.log("服务器已经启动!");
})