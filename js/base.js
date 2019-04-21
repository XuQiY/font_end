console.log(typeof(1));
console.log(typeof('a'));
var a={};
console.log(typeof(a));
console.log(typeof(true));
console.log(typeof(b));
console.log(null);

window.onload=function(){
  var oDiv1=document.getElementById('box1');
  //oDiv1.innerHTML='hello_word';
  oDiv1.style.width='300px';
  oDiv1.style.height='300px';
  oDiv1['style']['background']='red';
  console.log(oDiv1);

//定时改变背景色
/*  function changeColor(){
    var color='rgb('+Math.random()*300+','+Math.random()*200+','+Math.random()*100+')';
    oDiv1['style']['background']=color;
    console.log(color);
  }
//重复执行函数
  setInterval(changeColor,2000);
//只执行一次
  setTimeout(changeColor,2000);
*/
//匿名函数
/*
   var fun=function(x,y){
     return x+y;
   }
   console.log(fun(4,5));
   */
//DOM
/*
  var oP=oDiv1.getElementsByTagName('p');
  console.log(oP);
  oP[0].innerHTML='2';
  oP[0].style.width='30px';
  oP[0].style.height='30px';
  oP[0]['style']['background']='blue';
  var node=document.createTextNode("This is a new paragraph.");
  oP[1].appendChild(node);
  console.log(oP[1]);*/
//array
  var arr1=['a','a','c','v','h','k','l'];
  arr1.splice(3,1,'e');
  arr1.push(5); //末尾添加成员
  console.log(arr1);
  arr1.pop(); //末尾删除成员
  console.log(arr1);
  arr1.shift(); //开头删除成员
  console.log(arr1);
  arr1.unshift('a'); //开头添加成员
  console.log(arr1);

//数组去重!
/*
  for(var i=0;i<arr1.length;i++)
  {
    if(arr1.indexOf(arr1[i])==i)
    {
      console.log(arr1[i]);
    }
  }
  */
}
