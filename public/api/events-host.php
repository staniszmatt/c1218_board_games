<?php
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');

$output = [
   'success'=> false
];

$userID = $_GET['userID'];
$query = "SELECT e.id AS eventID, e.hostID, e.date, e.startTime, e.endTime, e.gameTitle, 
            e.gameImages, e.playerLimit, COUNT(pl.eventID) AS playerCount, e.location,
            l.city, l.state
         FROM event AS e
         JOIN location AS l
            ON e.location = l.id
         JOIN playerList AS pl
            ON pl.eventID = e.id
         JOIN playerList as plu
            ON plu.eventID = e.id
         WHERE pl.userID = 1 AND e.hostID = pl.userID
         GROUP BY e.id";
$result = $db->query($query);
$userID = [];

if ($result){
   $output['success'] = true;
$index = 0;
   while($row = $result->fetch_assoc()){
      $userID[] = [
         "eventID"=> $row["eventID"],
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

      $userID[$index]['location'] = [
         "city"=> $row["city"],
         "state"=> $row["state"]
      ];   
      $index++;
   }
}

$output['userID'] = $userID;
$json_output = json_encode($output);
print($json_output);
?>