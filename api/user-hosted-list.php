<?php
require_once('../config/setup.php');
require_once('../config/mysql_connect.php');

$output = [
   'success'=> false
];

$hostID = $_GET['hostID'];
$query = "SELECT e.*, 
            l.streetAddress, l.city, l.state, l.zipcode, p.playerName,
            pl.userID AS player, pl.id AS playerID
         FROM event AS e
         JOIN location AS l
            ON e.location = l.id
         RIGHT JOIN playerList AS pl
            ON pl.eventID = e.id
         JOIN profile AS p
            ON pl.userID = p.id
         WHERE hostID = $hostID";
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
               $row['playerID']);
            
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
