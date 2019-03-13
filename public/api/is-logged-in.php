<?php
session_start();

$output = [
    'logged-in' => false
];

if(isset($_SESSION['userID'])){
    $output['logged-in'] = true;
}

print(json_encode($output));
