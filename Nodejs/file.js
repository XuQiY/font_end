var fs=require('fs');
fs.readFile("../protry.txt",function (error,data) {
  if(error){
    console.log("读取文件失败");
    return ;
  }
  console.log(data.toString());
});
fs.writeFile('../protry.txt','凤凰台上凤凰游',function (error) {
  console.log(error);  
})