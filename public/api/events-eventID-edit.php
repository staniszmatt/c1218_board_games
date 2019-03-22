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
    throw new Exception("No data received.");
  }
  $output = [
    "success" => false,
    "output" => []
  ];
  //Setting address inline with the rest of the data
  $data['streetAddress'] = $data['location']['streetAddress'];
  $data['city'] = $data['location']['city'];
  $data['state'] = $data['location']['state'];
  $data['zipcode'] = $data['location']['zipcode'];
  unset($data['location']);
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
  if ((!checkMyDate($data['date']))) {
    throw new Exception("Please enter the correct format for the date.");
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
  if (!is_numeric($data['eventID']) || !is_numeric($data['hostID'])) {
    throw new Exception("Event and host ID must be a number.");
  }

  foreach ($data as $key => $value) {
    $data[$key] = addslashes($value);
  }
  //Get location id from event to update address
  $query = "SELECT location FROM event WHERE event.id = {$data['eventID']}";
  $result = $db->query($query);
  if (!$result) {
    $output['success'] = false;
    $output['error'] = "Location not found for event!";
  }
  while ($row = $result->fetch_assoc()) {
    $locationID = $row['location'];
  }
  if (empty($locationID)) {
    throw new Exception("No address ID found!");
  }
  //Update Address information 
  $query = "UPDATE location 
              SET streetAddress = '{$data['streetAddress']}', 
                city = '{$data['city']}',
                state = '{$data['state']}',
                zipcode = {$data['zipcode']}
                  WHERE id = {$locationID}";
  $result = $db->query($query);
  if (!$result) {
    $output['error'][] = $result;
    throw new Exception("Failed to update location.");
  } else {
    $output['updated'] = $result;
  }
  //Update event information 
  $query = "UPDATE event 
              SET startTime = '{$data['startTime']}',
                endTime = '{$data['endTime']}', 
                date = '{$data['date']}',
                gameTitle = '{$data['gameTitle']}',
                gameImages = '{$data['gameImages']}'
                  WHERE id = '{$data['eventID']}'";
  $result = $db->query($query);
  
  if (!$result) {
    $output['error'][] = $result;
    throw new Exception("Failed to update event.");
  } else {
    $output['success'] = true;
    $output['updated'][] = $result;
  }
}

$json_output = json_encode($output);
print($json_output);

?>