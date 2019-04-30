<?php
	require_once('mysqlcreds.php');
	$db = new mysqli($creds['host'], $creds['user'], $creds['pass'], $creds['database'], $creds['port']);
	if($db->connect_errno){
		printf("Connect Error: %s\n", $db->connect_error);
	}
?>