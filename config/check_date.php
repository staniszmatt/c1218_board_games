<?php

function checkmydate($date) {
   $tempDate = explode('-', $date);
   // checkdate(month, day, year)
   return checkdate($tempDate[1], $tempDate[2], $tempDate[0]);
 }

?>