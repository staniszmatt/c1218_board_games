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
   
   $query = "INSERT INTO location 
               SET streetAddress='{$data['streetAddress']}', 
                  city='{$data['city']}',
                  state='{$data['state']}',
                  zipcode='{$data['zipcode']}'";
                  
   $result = $db->query($query);
   
   if($result){
      $locationID = mysqli_insert_id($db);
   } else {
      $output['error'] = mysqli_error($db);
   }
   print_r("user ID from session ", $_SESSION['userID']);
   $query = "INSERT INTO event 
   SET hostID='{$_SESSION['userID']}', 
         date='{$data['date']}',
         startTime='{$data['startTime']}',
         endTime='{$data['endTime']}',
         gameTitle='{$data['gameTitle']}',
         gameImages='{$data['gameImages']}',
         playerLimit='{$data['playerLimit']}',
         location= '{$locationID}' ";
   
   $result =$db->query($query);
   
   if($result){
      $eventID = mysqli_insert_id($db);
   } else {
      $output['error'] = mysqli_error($db);
   }
   
   $query = "INSERT INTO playerList 
               SET eventID='{$eventID}', 
                     userID='{$_SESSION['userID']}'"; //Using the host id to pass the user id in player list, they should match. 
   
   $result =$db->query($query);
   
   if($result){
      $output['success'] = true;
      $output['eventID'] = $eventID;
   } else {
         $output['error'] = mysqli_error($db);
   }
}

$json_output = json_encode($output);
print($json_output);
?>