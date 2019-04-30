<?php
session_start();
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');

$output = [
  'success' => false
];

$eventID = $_GET['eventID'];
if(empty($eventID)){
  throw new Exception("Missing key name eventID");
}

$query = "SELECT e.id 
          AS eventID, e.hostID, e.date, e.startTime, e.endTime,e.gameTitle, e.playerLimit, e.location,
          COUNT(pl.eventID) AS playerCount, p.playerName,
          l.streetAddress, l.city, l.state, l.zipcode
            FROM event AS e
              JOIN location AS l
                ON e.location = l.id
                  JOIN playerList AS pl
                    ON pl.eventID = e.id
                      JOIN profile AS p
                        ON e.hostID = p.id
                          WHERE e.id = $eventID AND NOT e.hostID = '{$_SESSION['userID']}'";
$result = $db->query($query);
$event = [];

if ($result) {
  $output['success'] = true;
  if (!isset($_SESSION['userID'])) {
    $output['logged-in'] = false;
  } else {
    $output['logged-in'] = true;
  }
  while ($row = $result->fetch_assoc()) {
      $event = [
        "eventID" => $row["eventID"],
        "hostID" => $row["hostID"],
        "date" => $row["date"],
        "startTime" => $row["startTime"],
        "endTime" => $row["endTime"],
        "gameTitle" => $row["gameTitle"],
        "playerLimit" => $row["playerLimit"],
        "playerName" => $row["playerName"],
        "location" => $row["location"],
        "playerCount"=> $row["playerCount"]
      ];
      $event['location'] = [
        "streetAddress" => $row["streetAddress"],
        "city" => $row["city"],
        "state" => $row["state"],
        "zipcode" => $row["zipcode"]
      ];
  }
  if (empty($event) || $event['eventID'] === null) {
    throw new Exception("No event for the requested ID");
  } else {
    $output['event'] = $event;
  }
}

$json_output = json_encode($output);
print($json_output);
?>