<?php
require_once('../config/setup.php');
require_once('../config/mysql_connect.php');

$output = [
   'success'=> false
];

$id = $_GET['id'];
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
         WHERE e.id = $id";
$result = $db->query($query);
$data = [];

if ($result){
   $output['success'] = true;

   while($row = $result->fetch_assoc()){

      if(empty($data[$row['id']])){
   
         $row['playerList'][] = [
            'playerName'=> $row['playerName'],
            'player'=> $row['player'],
            'playerID'=> $row['playerID']
         ];
         unset($row['player'],
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