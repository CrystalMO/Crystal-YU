<?php 
      $mysqli=new mysqli("localhost:3306","root","root","users");
	$mysqli->set_charset("utf8");
	$nam=$_POST["username"];
	$pwd=$_POST["password"];
/***************/
echo "hshshshsh";

	/*sleep(1);
	require 'connect.php';
	
	$_pass=sha1($_POST['password']);
	
	$query=mysql_query("SELECT UName,password FROM user WHERE UName='{$_POST['username']}' AND password='{$_password}' ")or die("数据库错误".mysql_error());
	//mysql_fetch_array(规定要使用的数据指针，就是mysql_query返回的结果;规定要返回哪种结果，MySQL_ASSOC关联数组)
	if (mysql_fetch_array($query,MYSQL_ASSOC)) {
		echo 'true';
		}else{
			echo 'false';
		}
		
	mysql_close();*/

 ?>