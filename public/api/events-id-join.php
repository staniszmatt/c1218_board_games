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
$query = "INSERT INTO playerList 
         SET eventID='{$_POST[eventID]}', 
            userID='{$_POST['userID']}'";
$result =$db->query($query);
if($result){
   $output['success'] = true;
   $output['playerListID'] = $result;
   } else {
      $output['error'] = mysqli_error($db);
   }
$json_output = json_encode($output);
print($json_output);
?>