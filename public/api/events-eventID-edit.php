<?php
require_once('../config/setup.php');
require_once('../config/mysql_connect.php');

$output = [
   'success'=> false
];

$eventID = $_GET['eventID'];
$query = "SELECT e.*, 
            l.streetAddress, l.city, l.state, l.zipcode, 
            p.playerName,
            plAll.userID AS player, plAll.id AS playerID
         FROM event AS e
         JOIN location AS l
            ON e.location = l.id
         JOIN playerList AS plAll
            ON e.id = plAll.eventID
         JOIN profile AS p
            ON plAll.userID = p.id
         WHERE e.id = $eventID";
$result = $db->query($query);
$data = [];

if ($result){
   $output['success'] = true;

   while($row = $result->fetch_assoc()){
      if(empty($data[$row['id']])){
         $row['location'] = [
            'streetAddress'=> $row['streetAddress'],
            'city'=> $row['city'],
            'state'=> $row['state'],
            'zipcode'=> $row['zipcode']
         ];  
         $row['playerList'][] = [
            'playerName'=> $row['playerName'],
            'player'=> $row['player'],
            'playerID'=> $row['playerID']
         ];
         unset($row['streetAddress'], 
               $row['city'],
               $row['state'],
               $row['zipcode'],
               $row['player'],
               $row['playerID'],
               $row['playerName']);           
         $data[$row['id']] = $row;
      } else {
         $data[$row['id']]['playerList'][] = [
            'playerName'=> $row['playerName'],
            'player'=> $row['player'],
            'playerID'=> $row['playerID']
         ];
      }
   }
}

$output['data'] = $data;
$json_output = json_encode($output);
print($json_output);
?>
