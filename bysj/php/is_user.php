<?php 
	require "connect.php";
	$query=mysql_query("SELECT UName FROM user WHERE UName='{$_POST['username']}'")or die("error".mysql_error());
	if (mysql_fetch_array($query,MYSQL_ASSOC) ){
		echo "false ";
	}else{
		echo "true";
	}

	mysql_close();
 ?>