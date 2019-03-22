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
  if (!is_numeric($data['eventID'])) {
    throw new Exception("Event ID requires to be a number!");
  }
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
    throw new Exception("Event ID is corrupt.");
  }

  $query = "INSERT INTO playerList 
              SET eventID='{$data['eventID']}', 
                userID='{$_SESSION['userID']}'";

  $result = $db->query($query);
  if ($result) {
    $output['success'] = true;
    $output['playerListID'] = mysqli_insert_id($db);
  } else {
    throw new Exception("Error joining game.");
  }
}

$json_output = json_encode($output);
print($json_output);

?>