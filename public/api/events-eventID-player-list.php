<?php
session_start();
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');

if (!isset($_SESSION['userID'])) {
  $output['success'] = true;
  $output['logged-in'] = false;
} else {
  $output = [
    'success' => false
  ];
  $output['logged-in'] = true;
  $eventID = $_GET['eventID'];
  if(empty($eventID)){
    throw new Exception("Missing key name eventID");
  }
  $query = "SELECT e.id AS eventID, e.hostID, e.date, e.startTime, e.endTime,e.gameTitle, e.playerLimit, e.location,
              l.streetAddress, l.city, l.state, l.zipcode, 
              p.playerName, 
              pl.userID AS playerID
                FROM event AS e
                  JOIN location AS l
                    ON e.location = l.id
                      JOIN playerList AS pl
                        ON e.id = pl.eventID
                          JOIN profile AS p
                            ON pl.userID = p.id
                              WHERE e.id = $eventID";
  $result = $db->query($query);
  $event = [];

  if ($result) {
    $output['success'] = true;
    while ($row = $result->fetch_assoc()) {
      //If statement to get event data first then all other loops only adds the players to the player list. 
      if ($event) {
        $event['playerList'][] = [
          "playerID" => $row["playerID"],
          "playerName" => $row["playerName"]
        ];
      } else {
        $event = [
          "eventID" => $row["eventID"],
          "hostID" => $row["hostID"],
          "date" => $row["date"],
          "startTime" => $row["startTime"],
          "endTime" => $row["endTime"],
          "gameTitle" => $row["gameTitle"],
          "playerLimit" => $row["playerLimit"],
          "location" => $row["location"],
        ];
        $event['location'] = [
          "streetAddress" => $row["streetAddress"],
          "city" => $row["city"],
          "state" => $row["state"],
          "zipcode" => $row["zipcode"]
        ];
        $event['playerList'][] = [
          "playerID" => $row["playerID"],
          "playerName" => $row["playerName"]
        ];
      }
    }
  }
  if(empty($event['playerList'])){
    throw new Exception("No player data found.");
  } else {
    $output['playerList'] = $event;
  }
}

$json_output = json_encode($output);
print($json_output);

?>