<!-- 数据库连接 -->
<?php
	//设置页面编码
	header('Content-Type:text/html;charset=utf-8');
	//允许所有域名的脚本访问该资源	
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

	define('db_host', 'localhost');
 	define('db_user', 'root');
 	define('db_pwd', 'root');
 	define('db_name', 'users');// 数据库名字

 	// 数据库错误信息提示
 	$conn=mysql_connect(db_host,db_user,db_pwd)or die("数据库链接失败".mysql_error());
 	mysql_select_db(db_name)or die("数据库错误".mysql_error());
 	mysql_query("SET NAMES UTF8")or die("字符集错误".mysql_error());

 	
?>