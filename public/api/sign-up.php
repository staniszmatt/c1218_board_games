<?php
session_start();
require_once('../../config/check_date.php');
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');

if (!isset($_SESSION['userID'])){
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

   if(!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
      throw new Exception("Enter a valid email address!");
   };
   $password = $data["password"];
   unset($data["password"]);
   $location = null;  
   for($i = 0; $i < 2000; $i++){
      $password = hash("sha256", $password, false);
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
   $jointDate = date("y-m-d h:i:s");
   if(checkmydate($data['dateOfBirth']) !== 1){
      throw new Exception("Please enter correct date format.");
   }
   $query = "INSERT INTO profile 
            SET playerName='{$data['playerName']}',
               firstName='{$data['firstName']}',
               lastName='{$data['lastName']}',
               password='{$password}',
               dateOfBirth='{$data['dateOfBirth']}',
               joinDate='{$jointDate}',
               email='{$data['email']}',
               phone='{$data['phone']}',
               location= '{$locationID}' ";
   
   $result = $db->query($query);
   
   if($result){
      $id = mysqli_insert_id($db);
   } else {
      $output['error'] = mysqli_error($db);
   }
   
   if($result){
      $output['success'] = true;

      $_SESSION['userID'] = $id;
   } else {
         $output['error'] = mysqli_error($db);
   }
} else {
   $output['success']=true;
   $output['logged-in']=true;
}
$json_output = json_encode($output);
print($json_output);
?>