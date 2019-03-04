<?php
require_once('../config/setup.php');
require_once('../config/mysql_connect.php');

$output = [
   'success'=> false
];

$userID = $_GET['userID'];
$query = "SELECT e.*, 
l.streetAddress, l.city, l.state, l.zipcode, p.playerName,
pAll.userID AS player, pAll.id AS playerID
FROM event AS e
JOIN location AS l
ON e.location = l.id
JOIN playerList AS pl
ON pl.eventID = e.id
JOIN playerList AS pAll
ON e.id = pAll.eventID
JOIN profile AS p
ON pAll.userID = p.id
WHERE pl.userID = 1 AND NOT e.hostID = 1";
$result = $db->query($query);
$data = [];

if ($result){
   $output['success'] = true;

   while($row = $result->fetch_assoc()){
      
      // if(empty($data[$row['id']])){
      //    $row['location'] = [
      //       'streetAddress'=> $row['streetAddress'],
      //       'city'=> $row['city'],
      //       'state'=> $row['state'],
      //       'zipcode'=> $row['zipcode']
      //    ];
   
      //    $row['playerList'][] = [
      //       'playerName'=> $row['playerName'],
      //       'player'=> $row['player'],
      //       'playerID'=> $row['playerID']
      //    ];
      //    unset($row['streetAddress'], 
      //          $row['city'],
      //          $row['state'],
      //          $row['zipcode'],
      //          $row['player'],
      //          $row['playerID'],
      //          $row['playerName']);
            
      //    $data[$row['id']] = $row;
      // } else {
      //    $data[$row['id']]['playerList'][] = [
      //       'playerName'=> $row['playerName'],
      //       'player'=> $row['player'],
      //       'playerID'=> $row['playerID']
      //    ];
      // }
   }
}

$output['data'] = $data;
$json_output = json_encode($output);
print($json_output);
?>
