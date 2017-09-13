<?php

include_once('config.php');

$json = '[';
$query = mysql_query("select * from danmu");
while($row=mysql_fetch_array($query)){
	$json .= $row['content'].',';
}
$json = substr($json,0,-1);
$json .= ']';
echo $json;
?>