<?php
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');
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
$query = "INSERT INTO location 
         SET streetAddress='{$_POST['streetAddress']}', 
            city='{$_POST['city']}',
            state='{$_POST['state']}',
            zipcode='{$_POST['zipcode']}'";
$result = $db->query($query);
if($result){
   $locationID = mysqli_insert_id($db);
} else {
   print("Error for location");
   $output['error'] = mysqli_error($db);
}
$query = "INSERT INTO event 
SET hostID='{$_POST['hostID']}', 
   date='{$_POST['date']}',
   startTime='{$_POST['startTime']}',
   endTime='{$_POST['endTime']}',
   gameTitle='{$_POST['gameTitle']}',
   gameImages='{$_POST['gameImages']}',
   playerLimit='{$_POST['playerLimit']}',
   location= '{$locationID}' ";
$result =$db->query($query);
if($result){
      $eventID = mysqli_insert_id($db);
      print($eventID);
   } else {
      print("Error for event");
      $output['error'] = mysqli_error($db);
   }
   $query = "INSERT INTO playerList 
   SET eventID='{$eventID}', 
      userID='{$_POST['userID']}'";
$result =$db->query($query);
if($result){
   $output['success'] = true;
   $output['eventID'] = $eventID;
   } else {
      print("Error for player");
      $output['error'] = mysqli_error($db);
   }
$json_output = json_encode($output);
print($json_output);
?>