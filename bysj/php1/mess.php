<?php 
	// $mysqli=new mysqli("localhost:3306","root","root","hpress")
	include_once "config.php";
	header("constant-type:text/html;charset=utf8");
	connect();
	if(isset($_SESSION["username"])){
		$data['username']=$_SESSION["username"];
		$data['mess']=$_GET["str"];
		$data['madate']=$_GET["d"];
		insert("message",$data);
		echo "恭喜发表成功！";
	}else{
		echo "请先完成登录！";
	};
	
?>