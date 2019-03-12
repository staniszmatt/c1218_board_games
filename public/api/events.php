<?php
session_start();
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');

$output = [
   'success'=> false
];

if (!isset($_SESSION['userID'])){
   $query = "SELECT 
      e.*, l.city, l.state, COUNT(pl.eventID) AS playerCount
         FROM playerList as pl
            JOIN event AS e
               ON pl.eventID
                  JOIN location AS l
                     ON e.location = l.id
                        WHERE e.id = pl.eventID 
                           GROUP BY e.id";
} else {
   $query = "SELECT 
      e.*, l.city, l.state, COUNT(pl.eventID) AS playerCount
         FROM playerList as pl
            JOIN event AS e
               ON pl.eventID
                  JOIN location AS l
                     ON e.location = l.id
                        WHERE e.id = pl.eventID AND NOT e.hostID = '{$_SESSION['userID']['userID']}'
                           GROUP BY e.id";
}

$result = $db->query($query);
$event = [];

if ($result){
   $output['success'] = true;
   $index = 0;
   while($row = $result->fetch_assoc()){
      $event[] = [
         "id"=> $row["id"],
         "hostID"=> $row["hostID"],
         "date"=> $row["date"],
         "startTime"=> $row["startTime"],
         "endTime"=> $row["endTime"],
         "gameTitle"=> $row["gameTitle"],
         "gameImages"=> $row["gameImages"],
         "playerLimit"=> $row["playerLimit"],
         "playerCount"=> $row["playerCount"],
         "location"=> $row["location"]
      ];
      $event[$index]['location'] = [
         "city"=> $row["city"],
         "state"=> $row["state"]
      ];   
      $index++;
   }
}

$output['event'] = $event;
$json_output = json_encode($output);
print($json_output);
?>
