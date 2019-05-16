<?php
session_start();
echo session_id().'<br>';
if(!isset($_SESSION['count']))
{
  $_SESSION['count']=1;
}
else{
  $_SESSION['count']++;
  echo "这是您第{$_SESSION['count']}访问";
}
?>8 