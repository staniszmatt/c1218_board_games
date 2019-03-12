<?php
session_start();
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');

if(isset($_SESSION['userID'])){
   $output['success'] = true;
   $output['logged-in'] = true;
   $json_output = json_encode($output);
   print("Upper Logged in".$json_output);
} else if (!isset($_SESSION['userID'])) {
   $data = json_decode( file_get_contents( 'php://input'),true);

if(!$data){
   $output['success']=false;
   exit();
}

$output = [
   "success"=> false,
];

foreach($data as $key=>$value){
   $data[$key] = addslashes($value);
}

if(!empty($output['error'])){
   print(json_encode($output));
   exit();
}

$password = $data["password"];
unset($data["password"]);
$location = null;  
for($i = 0; $i < 2000; $i++){
   $password = hash("sha256", $password, false);
}

$query = "SELECT p.id AS userID
            FROM profile AS p
               WHERE p.password = '{$password}'
                  AND p.email = '{$data['email']}'"; 
unset($password);
$result = $db->query($query);

while($row = $result->fetch_assoc()){
   $userID = $row;
}

if(!$userID){
   $output['success'] = false;
   $output['error'] = "User Doesn't Exist";
} else {
   $output['success'] = true;
   $output['logged-in'] = true;
   $output['userID'] = $userID;
   $_SESSION['userID'] = $userID;
}

$json_output = json_encode($output);
print($json_output);
}

?>