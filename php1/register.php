<?php 
	// $mysqli=new mysqli("localhost:3306","root","root","hpress")
	include_once "config.php";
	header("constant-type:text/html;charset=utf8");
	connect();
	$data['UName']=$_POST["x1"];
	$data['password']=$_POST["x2"];
	
	insert("user",$data);
	echo "恭喜注册成功！";
?>