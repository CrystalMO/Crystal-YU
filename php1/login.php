<?php
	/*require 'config.php';
	
	$query=mysql_query("SELECT UName,password FROM user WHERE UName='{$_POST['loginname']}' AND password='{$_POST['loginpwd']}' ")ysql_error die("数据库错误".mor());
	//mysql_fetch_array(规定要使用的数据指针，就是mysql_query返回的结果;规定要返回哪种结果，MySQL_ASSOC关联数组)
	/*if (mysql_fetch_array($query,MYSQL_ASSOC)) {
			echo 'true';
		}else{
			echo 'false';
		}*/
		// echo "hahahahahhah";
	// mysql_close();*/


      $mysqli=new mysqli("localhost:3306","root","root","users");
	$mysqli->set_charset("utf8");
	$nam=$_POST["x1"];
	$pwd=$_POST["y"];
	$sql="select password from user where UName='$nam'";
	$rest=$mysqli->query($sql);
	$en=$rest->fetch_all();
	if($pwd==$en[0][0]){

		echo (true);

	}else{
		echo (false);
	};

	
?>