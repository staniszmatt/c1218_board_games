<?php
session_start();
session_destroy();

$output['success'] = true;
$output['logged-in']= false;
$json_output = json_encode($output);
print($json_output);