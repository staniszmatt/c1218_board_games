<?php
session_start();
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');
//TODO: Setup an array of data fields that is allowed to change and reject the rest 
$dataCheck = [ "eventID", "date", "startTime", "endTime", "gameTitle", "gameImages"];

if (!isset($_SESSION['userID'])){
   $output['success'] = true;
   $output['logged-in'] = false;
} else {
   print(!isset($_SESSION));
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
   
   if(!empty($output['error'])){
      print(json_encode($output));
      exit();
   }
   $eventID = $data['eventID'];
   unset($data['eventID']);

   foreach($data as $key=>$value){
      $checkValue = false;
      for ($index = 0; $index < sizeof($dataCheck); $index++ ){
         if ($key === $dataCheck[$index]){
            $checkValue = true; 
         }
      }
      echo($checkValue);
      if (!$checkValue){
         $output['error'][] = "Can not edit {$key}!";
      } 
      else {
         $query = "UPDATE event SET {$key} = '{$value}' WHERE id = '{$eventID}'";
         echo("<div>");
         print_r($query."<br>");
         echo("</div>");
         $result = $db->query($query);
         echo("<div>");
         echo($result."<br>");
         echo("</div>");
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