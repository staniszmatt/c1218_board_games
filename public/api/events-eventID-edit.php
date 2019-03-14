<?php
session_start();
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');

if (!isset($_SESSION['userID'])){
   $output['success'] = true;
   $output['logged-in'] = false;
} else {
   $data = json_decode( file_get_contents( 'php://input'),true);
   if(!$data){
      $output['success']=false;
      exit();
   }
   $output = [
      "success"=> false,
      "output"=> []
   ];
   foreach($data as $key=>$value){
      $data[$key] = addslashes($value);
   } 
  
   //Get location id from event to udpate address
   $query = "SELECT location FROM event WHERE event.id = {$data['eventID']}";
   $result = $db->query($query);
  
   if(!$result){
      $output['success']=false;
      $output['error']="Location not found for event!";
      exit();
   }
   while($row = $result->fetch_assoc()){
      $locationID = $row['location'];
   }

   //Update Address information 
   $query = "UPDATE location 
      SET streetAddress = '{$data['streetAddress']}', 
            city = '{$data['city']}',
            state = '{$data['state']}',
            zipcode = {$data['zipcode']}
               WHERE id = {$locationID}";
   $result = $db->query($query);
   if (!$result){
      $output['error'][] = $result;
   } else {
      $output['updated'] = $result;
   }
   //Upate event information 
   $query = "UPDATE event 
      SET startTime = '{$data['startTime']}',
            endTime = '{$data['endTime']}', 
            date = '{$data['date']}',
            gameTitle = '{$data['gameTitle']}',
            gameImages = '{$data['gameImages']}'
               WHERE id = '{$data['eventID']}'";
print_r($query);
   $result = $db->query($query);
   if (!$result){
      $output['error'][] = $result;
   } else {
      $output['success'] = true;
      $output['updated'][] = $result;
   }
}

$json_output = json_encode($output);
print($json_output);
?>