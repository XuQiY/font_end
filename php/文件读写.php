<?php
$file=fopen("../protry.txt",'a+') or die("文件打开失败!");
$file_w=fopen("../protry1.txt",'a+');
while(!feof($file))
{
  $line=nl2br(fgets($file));
  echo $line;
  fwrite($file_w,$line);
}
fclose($file);
fclose($file_w);
?>