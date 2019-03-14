<?php
session_start();
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');

$dataCheck = [ "eventID", "date", "startTime", "endTime", "gameTitle", "gameImages", "playerLimit", 
               "streetAddress", "city", "state", "zipcode" ];

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
   //Get Event ID and remove it from the assoc array
   $eventID = $data['eventID'];
   unset($data['eventID']);
   //Get Location ID to submit changes
   $query = "SELECT location FROM event WHERE event.id = {$eventID}";
   $result = $db->query($query);

   if(!$result){
      $output['success']=false;
      $output['error']="Location not found for event!";
      exit();
   }
   while($row = $result->fetch_assoc()){
      $locationID = $row['location'];
   }
  foreach($data as $key=>$value){
      $checkValue = false;
      //Verify Key names are allowed to be edited
      for ($index = 0; $index < sizeof($dataCheck); $index++ ){
         if ($key === $dataCheck[$index]){
            $checkValue = true; 
         }
      }
      if (!$checkValue){
         $output['error'][] = "Can not edit {$key}!";
      } 
      else {
         if ($key === "streetAddress" || $key === "city" || $key === "state" || $key === "zipcode"){
            $query = "UPDATE location SET {$key} = '{$value}' WHERE id = {$locationID}";
         } else {
            $query = "UPDATE event SET {$key} = '{$value}' WHERE id = '{$eventID}'";
         }
         print_r($query);
         print_r($result);
         $result = $db->query($query);
         if (!$result){
            $output['error'][] = $result;
         } else {
            $output['success'] = true;
            $output['updated'][] = $result;
         }
      }
   }
}

$json_output = json_encode($output);
print($json_output);
?>