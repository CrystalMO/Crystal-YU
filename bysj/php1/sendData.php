<?php
include_once('config.php');

$danmu=strip_tags($_POST['danmu']);
$addtime = time();
$sql="INSERT INTO `danmu`(`id`,`content`,`D_time`) VALUES (null,'$danmu','$addtime')";
$query=mysql_query($sql) or die('数据插入失败!'.mysql_error());
// $query=mysql_query($sql); 
mysql_close();
?>