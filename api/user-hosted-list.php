<?php
require_once('../config/setup.php');
require_once('../config/mysql_connect.php');

$output = [
   'success'=> false
];
$hostID = $_GET['hostID'];
   print($hostID);
$query = "SELECT * FROM event WHERE hostID = $hostID";
$result = $db->query($query);

$data = [];

while($row = $result->fetch_assoc()){
   $data[] = $row;
}

$output['success'] = true;
$output['data'] = $data;
$json_output = json_encode($output);
print($json_output);
?>