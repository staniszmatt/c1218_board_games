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
  // Error Handling
  if (!is_numeric($data['eventID'])) {
    throw new Exception("Event ID must be a number.");
  }
  //Sanitize with backslashes 
  foreach ($data as $key => $value) {
    $data[$key] = addslashes($value);
  }
  //Update event information 
  $query = "DELETE FROM playerList 
              WHERE userID='{$_SESSION['userID']}' AND eventID='{$data['eventID']}'";
  $result = $db->query($query);
  if (!$result) {
  $output['error'][] = $result;
  throw new Exception("Failed to leave event.");
  } else {
  $output['success'] = true;
  $output['updated'][] = $result;
  }
}
$json_output = json_encode($output);
print($json_output);
?>