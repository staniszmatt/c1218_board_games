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

  $query = "SELECT e.id AS eventID, e.hostID, e.date, e.startTime, e.endTime, e.gameTitle, 
              e.playerLimit, COUNT(pl.eventID) AS playerCount, e.location,
              l.city, l.state
                FROM event AS e
                  JOIN location AS l
                    ON e.location = l.id
                      JOIN playerList AS pl
                        ON pl.eventID = e.id
                          JOIN playerList as plu
                            ON plu.eventID = e.id
                              WHERE pl.userID = '{$_SESSION['userID']}' AND NOT pl.userID = e.hostID AND e.date > CAST( NOW() AS DATE)
                                GROUP BY e.id";
  $result = $db->query($query);
  $userEvents = [];

  if ($result) {
    $output['success'] = true;
    $index = 0;
    while ($row = $result->fetch_assoc()) {
      $userEvents[] = [
        "eventID" => $row["eventID"],
        "hostID" => "{$_SESSION['userID']}",
        "date" => $row["date"],
        "startTime" => $row["startTime"],
        "endTime" => $row["endTime"],
        "gameTitle" => $row["gameTitle"],
        "playerLimit" => $row["playerLimit"],
        "playerCount" => $row["playerCount"],
        "location" => $row["location"]
      ];

      $userEvents[$index]['location'] = [
        "city" => $row["city"],
        "state" => $row["state"]
      ];
      $index++;
    }
  } else {
    throw new Exception("Error getting events.");
  }

  $output['userID'] = $userEvents;
}

$json_output = json_encode($output);
print($json_output);
?>