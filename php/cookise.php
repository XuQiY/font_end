<?php
//设置cookie
setcookie("User","mrx",time()+60*60);
echo $_COOKIE["User"];
//cookie存储数组
for($i=0;$i<3;$i++)
{
  setcookie("words[$i]","cookies.$i");
}
if(isset($_COOKIE["words"])){
  foreach($_COOKIE["words"] as $key=>$value)
  {
   echo $key."\t".$value.'<br>';
  }
}
?>