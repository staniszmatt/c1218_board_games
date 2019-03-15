<?php
session_start();
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');

if (!isset($_SESSION['userID'])){
   $output['success'] = true;
   $output['logged-in'] = false;
} else {
   $output = [
      'success'=> false
   ];
   
   // $id = $_GET['id'];
   $query = "SELECT p.*, 
               l.streetAddress, l.city, l.state, l.zipcode 
            FROM profile AS p
            JOIN location AS l
               ON p.location = l.id
            WHERE p.id = '{$_SESSION['userID']}'";
   $result = $db->query($query);
   $data = [];
   
   while($row = $result->fetch_assoc()){
      $output['success'] = true;
      $row['location'] = [
         'streetAddress'=> $row['streetAddress'],
         'city'=> $row['city'],
         'state'=> $row['state'],
         'zipcode'=> $row['zipcode']
      ];
      unset($row['streetAddress'], 
      $row['city'],
      $row['state'],
      $row['zipcode']);
      $data[] = $row;
   }
   
   $output['data'] = $data;
}

$json_output = json_encode($output);
print($json_output);

?>