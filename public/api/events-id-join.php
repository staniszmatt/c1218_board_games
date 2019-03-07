<?php
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');
$output = [
   "success"=> false,
   "output"=> []
];
// foreach($_POST as $key=>$value){
//    $_POST[$key] = addslashes($value);
// }
$data = json_decode( file_get_contents( 'php://input'),true);

if(!$data){
   exit();
}
if(!empty($output['error'])){
   print(json_encode($output));
   exit();
}
$query = "INSERT INTO playerList 
            SET eventID='{$data[0]['value']}', 
               userID='{$data[1]['value']}'";
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