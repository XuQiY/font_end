// 交换两个变量：

//var a=456,b=123;

/**数组方法
var c=[a,b]
function func(n) {
  var temp=0;
  temp=n[0];
  n[0]=n[1];
  n[1]=temp;
  return n;
}
ret=func(c);
alert(ret[0])
*/

/**方法二自加
a+=b;
b=a-b;
a=a-b;
alert(a);
**/

/**方法三 对象
a={a:b,b:a}
b=a.b;
a=a.a;
alert(a);**/

/**dom获取对象
var bt=document.getElementById('bt');
bt.onclick=function(){
  var bt1=document.getElementById('bt2');
  bt.style.color='red';
  bt.style.fontSize='16px';
  bt.style.backgroundColor='blue';
  var val1=bt.value;
  var val2=bt1.value;
  bt1.value=val1;
  bt1.style.color='yellow';
}
**/

var foo=10+'20'; //返回1020
var foo1=0.1+0.2==0.3;  //返回false

/**计时器window.onload = function(){
       var oDiv = document.getElementById('div1');
       function timeleft(){
           var now = new Date();
           var future = new Date(2019,8,12,24,0,0);
           var lefts = parseInt((future-now)/1000);
           var day = parseInt(lefts/86400);
           var hour = parseInt(lefts%86400/3600);
           var min = parseInt(lefts%86400%3600/60);
           var sec = lefts%60;
           str = '距离2019年9月12日晚24点还剩下'+day+'天'+hour+'时'+min+'分'+sec+'秒';
           oDiv.innerHTML = str;
       }
       timeleft();
       setInterval(timeleft,1000);
   }**/

/* 闭包函数
var count = (function(){
       var a = 0;
       function add(){
           a++;
           return a;
       }
       return add;
   })()
   count();
   var nowcount = count();
   alert(nowcount);
*/

/*ES6 解析函数
const arr=[1,2,3];
const[a,b,c]=arr;
alert(b);
// es5
var arr = [1, 2, 3];
var a = arr[0];
var b = arr[1];
var c = arr[2];
*/
// es6 箭头函数写法，当函数直接被return时，可以省略函数体的括号
/*
const text=()=>{
  const a=20;
  const b=30;
  return a+b;
}
alert(text());

const text1=(a,b)=>a+b;
alert(text1(10,5));
*/
