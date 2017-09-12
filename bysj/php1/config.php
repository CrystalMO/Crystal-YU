<?php
session_start();
header("content-type:text/html;charset=utf-8");
date_default_timezone_set("PRC");
/*数据库相关配置*/
define('DB_HOST','127.0.0.1');
define('DB_PORT',3306);
define('DB_USER','root');
define('DB_PWD','root');
define('DB_CHARSET','utf8');
define('DB_NAME','users');


//set_include_path(get_include_path().PATH_SEPARATOR.PUBLIC_DIR.PATH_SEPARATOR.PUBLIC_DIR.'/lib');
include_once "mysql.inc.php";























