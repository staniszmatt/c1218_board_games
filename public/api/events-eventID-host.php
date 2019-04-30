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
  if (empty($eventID)) {
    throw new Exception("Missing key name eventID");
  }
  $query = "SELECT e.id AS eventID, e.hostID, e.date, e.startTime, e.endTime,e.gameTitle, e.playerLimit, e.location,
            l.streetAddress, l.city, l.state, l.zipcode, p.playerName,
            COUNT(pl.eventID) AS playerCount
              FROM event AS e
                JOIN location AS l
                  ON e.location = l.id
                    JOIN playerList AS pl
                      ON pl.eventID = e.id
                        JOIN profile AS p
                          ON e.hostID = p.id
                            WHERE e.id = $eventID AND e.hostID = '{$_SESSION['userID']}'";
  $result = $db->query($query);
  $event = [];

  if ($result) {
    $output['success'] = true;

    while ($row = $result->fetch_assoc()) {
      //If statement to get event first then get list of players only after that

      $event = [
        "eventID" => $row["eventID"],
        "hostID" => $row["hostID"],
        "date" => $row["date"],
        "startTime" => $row["startTime"],
        "endTime" => $row["endTime"],
        "gameTitle" => $row["gameTitle"],
        "playerCount" => $row["playerCount"],
        "playerLimit" => $row["playerLimit"],
        "playerName" => $row['playerName'],
        "location" => $row["location"]
      ];
      $event['location'] = [
        "streetAddress" => $row["streetAddress"],
        "city" => $row["city"],
        "state" => $row["state"],
        "zipcode" => $row["zipcode"]
      ];
    }
  }
  if(empty($event) || $event['eventID'] === null){
    throw new Exception("No event data found");
  } else {
    $output['event'] = $event;
  }
}

$json_output = json_encode($output);
print($json_output);

?>