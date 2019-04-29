import React from 'react';

export default function(time) {
  // Check correct time format and split into components
  //Used this from outside source and fixed to what I needed, https://stackoverflow.com/questions/13898423/javascript-convert-24-hour-time-of-day-string-to-12-hour-time-with-am-pm-and-no
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time.pop(); //Remove the last set of zeros
    time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  let timeReturn = time.join('');
  return timeReturn; // return adjusted time or original string
}