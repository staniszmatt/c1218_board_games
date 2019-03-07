<?php
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');

// getting back an array of objects, the object will contain a key of title
// the file_get_contents allows you to go to a specific file and gives it the information that is needs
// we need true inorder to make sure that we have an associate array 
//only comes in url encoded variables, so we have to go to the boday and pull the data and 

$data = json_decode( file_get_contents( 'php://input'),true);

if(!$data){
   exit();
}

$output = [
   "success"=> false,
   "output"=> []
];
// foreach($data as $key=>$value){
//    $data[$key] = addslashes($value);
// }

if(!empty($output['error'])){
   print(json_encode($output));
   exit();
}
$query = "INSERT INTO location 
         SET streetAddress='{$data[0]['value']}', 
            city='{$data[1]['value']}',
            state='{$data[2]['value']}',
            zipcode='{$data[3]['value']}'";
$result = $db->query($query);

if($result){
   $locationID = mysqli_insert_id($db);
} else {
   $output['error'] = mysqli_error($db);
}

$query = "INSERT INTO event 
SET hostID='{$data[4]['value']}', 
   date='{$data[5]['value']}',
   startTime='{$data[6]['value']}',
   endTime='{$data[7]['value']}',
   gameTitle='{$data[8]['value']}',
   gameImages='{$data[9]['value']}',
   playerLimit='{$data[10]['value']}',
   location= '{$locationID}' ";
$result =$db->query($query);
if($result){
      $eventID = mysqli_insert_id($db);
   } else {
      $output['error'] = mysqli_error($db);
   }
   $query = "INSERT INTO playerList 
   SET eventID='{$eventID}', 
      userID='{$data[4]['value']}'";
$result =$db->query($query);
if($result){
   $output['success'] = true;
   $output['eventID'] = $eventID;
   } else {
      $output['error'] = mysqli_error($db);
   }
$json_output = json_encode($output);
print($json_output);
?>