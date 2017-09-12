<?php
	$mysqli=new mysqli("localhost:3306","root","root","hpress");
	$mysqli->set_charset("utf8");
	// header("constant-type:text/html;set_charset=utf8");
	// $_x=$_POST["id"];
	$sql="select * from user order by id DESC limit 1";
	$res=$mysqli->query($sql);
	// $l=$y->num_rows;
	$x=$res->fetch_array();
	echo $x["username"]."&".$x["phone"];
	/*$x=fetchAll("select * from user where id=1");
	print_r($x);*/
?>