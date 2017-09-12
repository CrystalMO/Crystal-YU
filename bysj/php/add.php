<?php
   sleep(1);
    require "connect.php";
    $query="INSERT INTO user(UName,password) VALUES ('{$_POST['user']}',sha1('{$_POST['password']}'))";
    mysql_query($query)or die("新增失败！".mysql_error());
    echo mysql_affected_rows();
    mysql_close();
?>
