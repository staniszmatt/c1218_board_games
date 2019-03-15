<?php
session_start();
require_once('../../config/error_check_functions.php');
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
   if((!checkStrg20($data['playerName'])) || (!checkStrg20($data['firstName'])) || !checkStrg20($data['city']) || !checkStrg20($data['state'])){
      throw new Exception("Player name, first name, city or state is to long!");
   }
   if((!checkStrg30($data['email'])) || (!checkStrg30($data['lastName'])) || !checkStrg30($data['password']) || !checkStrg30($data['streetAddress'])){
      throw new Exception("Last name, email or password is to long!");
   }
   if((!checkEmail($data['email']))){
      throw new Exception("Enter a valid email address!");
   }
   if ((!checkMyDate($data['dateOfBirth']))){
      throw new Exception("Please enter the correct format for date of birth.");
   }
   if ((!checkPhoneNum($data['phone']))){
      throw new Exception("Please enter a proper phone number");
   }
   if ((!checkZip($data['zipcode']))){
      throw new Exception("Please enter a proper zip code");
   }

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