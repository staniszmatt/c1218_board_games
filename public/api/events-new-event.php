<?php

require_once('../config/setup.php');
require_once('../config/mysql_connect.php');

$output = [
   "success"=> false,
   "output"=> []
];

foreach($_POST as $key=>$value){
   $_POST[$key] = addslashes($value);
}


if(!empty($output['error'])){
   print(json_encode($output));
   exit();
}

// $query = "INSERT INTO location 
//          SET `streetAddress`='{$_POST['streetAddress']}', 
//             `city`='{$_POST['city']}',
//             `state`='{$_POST['state']}',
//             `zipcode`='{$_POST['zipcode']}'";

// $result = $db->query($query);

// if($result){
//    $output['success'] = true;
//    $output['location_id'] = mysqli_insert_id($db);
// } else {
//    $output['error'] = mysqli_error($db);
// }

$query = "INSERT INTO location 
SET `id`='{$_POST['id']}', 
   `date`='{$_POST['date']}',
   `startTime`='{$_POST['startTime']}',
   `endTime`='{$_POST['endTime']}',
   `gameTitle`='{$_POST['gameTitle']}',
   `gameImages`='{$_POST['gameImages']}',
   `playerLimit`='{$_POST['playerLimit']}',
   `location`= 12 ";
$result =$db->query($query);
if($result){
   $output['success'] = true;
   $output['output'] = $result;
} else {
   $output['error'] = mysqli_error($db);
}

$json_output = json_encode($output);
print($json_output);

?>