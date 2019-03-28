<?php

function checkStrg2($string){
  return (strlen($string) > 2 || strlen($string) < 0) ? 0 : 1;
}

function checkStrg20($string){
  return (strlen($string) > 20) ? 0 : 1;
}

function checkStrg30($string){
  return (strlen($string)) > 30 ? 0 : 1;
}

function checkStrg60($string){
  return (strlen($string)) > 60 ? 0 : 1;
}

function checkEmail($string){
  return (!filter_var($string, FILTER_VALIDATE_EMAIL)) ? 0 : 1;
}

function checkMyDate($date){
  $format = 'Y-M-D';
  $d = DateTime::createFromFormat($format, $date);
  return $d && $d->format($format) == $date;
}

function checkCurrentDate($date){
  $today = date('Y-m-d');
  return ($date>=$today) ? 1 : 0; 
}

function checkTime($time){
  $format = 'H:i:s';
  $d = DateTime::createFromFormat($format, $time);
  return $d && $d->format($format) == $time;
}

function checkPhoneNum($phoneNum){
  return (!is_numeric($phoneNum) || strlen($phoneNum) > 11) ? 0 : 1;
}

function checkZip($zipcode){
  return (!is_numeric($zipcode) || strlen($zipcode) > 5 || strlen($zipcode) < 5) ? 0 : 1;
}