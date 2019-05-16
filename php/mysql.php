<?php
  $mysql=mysqli_connect("localhost","root","123456") or die("连接失败");
  echo "连接成功".'<br>';
  mysqli_select_db($mysql,"student")or die("打开数据库失败");
  echo "打开数据库成功";
  $com="SELECT * FROM STUDENTS";
  //$com1="insert into students values(10,'HUB','54215451225','RAFU')";
  //echo $com1;
  //mysqli_query($mysql,$com1);
  $result=mysqli_query($mysql,$com);
  echo mysqli_num_rows($result).'<br>';
  // mysqli_fetch_row()返回结果集的一行
  // while($line=mysqli_fetch_row($result)){
  //   echo"<br>";
  //   foreach($line as $item){
  //     echo $item."\t";
  //   }
  // }
  //mysql——fetch_array()返回结果集的一行，可以用索引查找，当type为MYSQL_NUM时，结果与mysqli_fetch_row();
  while($line=mysqli_fetch_array($result,MYSQLI_NUM))
  {
    echo "<br>";
    // foreach($line as $i=>$values){
    //   echo $values.'<br>';
    // }
    print_r($line);
  }
  mysqli_close($mysql);
  // mysql_select_db($mysql,"students");
  // $sql_insert="INSERT INTO STUDENTS VALUES(4,'John','13511245223','NEWYORK')";
  // $result=mysqli_query($mysql,$sql_insert);
  // $mysql->select_db("students");
  // $mysql->query($sql_insert);
?>