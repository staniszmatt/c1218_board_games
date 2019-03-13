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
   
   if(!empty($output['error'])){
      print(json_encode($output));
      exit();
   }
   
   $query = "INSERT INTO playerList 
               SET eventID='{$data['eventID']}', 
                  userID='{$_SESSION['userID']['userID']}'";
   
   $result =$db->query($query);
   if($result){
      $eventID = mysqli_insert_id($db);
   } else {
      $output['error'] = mysqli_error($db);
   }
   
   if($result){
      $output['success'] = true;
      $output['playerListID'] = $eventID;
   } else {
      $output['error'] = mysqli_error($db);
   }
}

$json_output = json_encode($output);
print($json_output);
?>