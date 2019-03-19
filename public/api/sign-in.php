<?php
session_start();
require_once('../../config/error_check_functions.php');
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');

if (isset($_SESSION['userID'])) {
  $output['success'] = true;
  $output['logged-in'] = true;
  $json_output = json_encode($output);
} else {
  $data = json_decode(file_get_contents('php://input'), true);
  if (!$data) {
    throw new Exception("Nothing was received!");
    exit();
  }

  $output = [
    "success" => false,
  ];

  foreach ($data as $key => $value) {
    $data[$key] = addslashes($value);
  }

  if (!$data) {
    throw new Exception("Data is corrupt!");
  }
  if ((!checkEmail($data['email']))) {
    throw new Exception("Enter a valid email address!");
  }
  $password = $data["password"];
  unset($data["password"]);
  $location = null;
  for ($i = 0; $i < 2000; $i++) {
    $password = hash("sha256", $password, false);
  }

  $query = "SELECT p.id AS userID
              FROM profile AS p
                WHERE p.password = '{$password}'
                  AND p.email = '{$data['email']}'";
  unset($password);
  $result = $db->query($query);

  while ($row = $result->fetch_assoc()) {
    $userID = $row;
  }
  if (!$userID) {
    throw new Exception("Incorrect user email or password!");
  } else {
    $_SESSION['userID'] = $userID['userID'];
    $output['success'] = true;
    $output['logged-in'] = true;
  }
}

$json_output = json_encode($output);
print($json_output);
?>