<?php

function checkStrg20($string)
{
  return (strlen($string) > 20) ? 0 : 1;
}

function checkStrg30($string)
{
  return (strlen($string)) > 30 ? 0 : 1;
}

function checkEmail($string)
{
  return (!filter_var($string, FILTER_VALIDATE_EMAIL)) ? 0 : 1;
}

function checkMyDate($date)
{
  $format = 'Y-m-d';
  $d = DateTime::createFromFormat($format, $date);
  return $d && $d->format($format) == $date;
}

function checkPhoneNum($phoneNum)
{
  return (!is_numeric($phoneNum) || strlen($phoneNum) > 11) ? 0 : 1;
}

function checkZip($zipcode)
{
  return (!is_numeric($zipcode) || strlen($zipcode) > 5) ? 0 : 1;
}