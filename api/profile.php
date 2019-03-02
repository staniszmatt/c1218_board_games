<?php
require_once('../config/setup.php');
require_once('../config/mysql_connect.php');

$output = [
   'success'=> false
];

$id = $_GET['id'];
$query = "SELECT * FROM `profile` WHERE `id` = $id";
$result = $db->query($query);

$data = [];

while($row = $result->fetch_assoc()){
   $data[] = $row;
}

$output['data'] = $data;
$json_output = json_encode($output);
print($json_output);

?>