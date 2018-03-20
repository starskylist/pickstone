<?php
	$username = $_REQUEST["user"]
	$resId = $_REQUEST["resId"];
	$resName = $_REQUEST["resName"];
	$resType = $_REQUEST["resType"];
	$click = $_REQUEST["click"];
	$view = $_REQUEST["view"];
	$playDuration = $_REQUEST["playDuration"];
	$totalDuration = $_REQUEST["totalDuration"];
	$flag = $_REQUEST["flag"];
	$from = $_REQUEST["from"];
	//数据库操作
	$link = mysql_connect('localhost', 'root','root');
	if (!$link) {
		die('Could not connect: ' . mysql_error());
	}else {
		$query = "insert into userhistory (user，resId,resName,resType,click,view,playDuration,totalDuration,flag,from) values('{$username}','{$resId}','{$resName}','{$resType}','{$click}','{$view}','{$playDuration}','{$totalDuration}','{$flag}','{$from}')";
		$result=mysql_query($link, $query);
	}
?>