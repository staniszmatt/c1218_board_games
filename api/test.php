<?php
require_once('../config/setup.php');
require_once('../config/mysql_connect.php');
$output = [
   'success'=> false
];
$query = 'SELECT * FROM `profile`';
$result   = $db->query($query);

$data = [];

while($row = $result->fetch_assoc()){
   $data[] = $row;
}

$output['data'] = $data;
$json_output = json_encode($output);
print($json_output);

?>