<?php
session_start();
require_once('../../config/error_check_functions.php');
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');
if (!isset($_SESSION['userID'])) {
  $output['success'] = true;
  $output['logged-in'] = false;
} else {
  $data = json_decode(file_get_contents('php://input'), true);

  if (!$data) {
    $output['success'] = false;
    exit();
  }

  $output = [
    "success" => false,
    "output" => []
  ];

  foreach ($data as $key => $value) {
    $data[$key] = addslashes($value);
  }

  if (!empty($output['error'])) {
    print(json_encode($output));
    exit();
  }
  // Error Handling
  if ((!checkStrg2($data['playerLimit']))) {
    throw new Exception("Player limit to large!");
  }
  if ((!checkStrg20($data['city'])) || (!checkStrg20($data['state']))) {
    throw new Exception("City or state is to long!");
  }
  if ((!checkStrg30($data['streetAddress']))) {
    throw new Exception("Street address is to long!");
  }
  if ((!checkZip($data['zipcode']))) {
    throw new Exception("Please enter a proper zip code.");
  }
  if ((!checkStrg60($data['gameTitle']))) {
    throw new Exception("Game title is to long.");
  }
  if ((!checkTime($data['startTime'])) || (!checkTime($data['endTime']))) {
    throw new Exception("Start or end time was entered incorrectly.");
  }
  if ((!checkCurrentDate($data['date']))) {
    throw new Exception("Date must be today or later.");
  }

  $query = "INSERT INTO location 
              SET streetAddress='{$data['streetAddress']}', 
                city='{$data['city']}',
                  state='{$data['state']}',
                    zipcode='{$data['zipcode']}'";
  $result = $db->query($query);

  if ($result) {
    $locationID = mysqli_insert_id($db);
  } else {
    $output['error'] = mysqli_error($db);
  }

  $query = "INSERT INTO event 
              SET hostID='{$_SESSION['userID']}', 
                date='{$data['date']}',
                startTime='{$data['startTime']}',
                endTime='{$data['endTime']}',
                gameTitle='{$data['gameTitle']}',
                gameImages='{$data['gameImages']}',
                playerLimit='{$data['playerLimit']}',
                location= '{$locationID}'";
  $result = $db->query($query);

  if ($result) {
    $eventID = mysqli_insert_id($db);
  } else {
    $output['error'] = mysqli_error($db);
  }
  //Using the host id to pass the user id in player list, they should match. 
  $query = "INSERT INTO playerList 
              SET eventID='{$eventID}', 
                  userID='{$_SESSION['userID']}'"; 
  $result = $db->query($query);

  if ($result) {
    $output['success'] = true;
    $output['eventID'] = $eventID;
  } else {
    throw new Exception("Error creating event");
  }
}

$json_output = json_encode($output);
print($json_output);

?>