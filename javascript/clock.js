"use strict";

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function displayTime() {
  var clockContainer = document.getElementById("clock");

  var currentTime           = new Date();
  var currentTimeHours      = currentTime.getHours();
  var currentTimeMinutes    = currentTime.getMinutes();
  var currentTimeSeconds    = currentTime.getSeconds();
  var meridiem = "AM";

  if (currentTimeHours > 12) {
    currentTimeHours = currentTimeHours - 12;
    meridiem = "PM";
  };

  clockContainer.innerText = currentTimeHours + ":" + 
                             addLeadingZero(currentTimeMinutes) + ":" + 
                             addLeadingZero(currentTimeSeconds) + " " + 
                             meridiem;
};

function addLeadingZero(number) {
  if (number < 10) {
    number = "0" + number;
  }

  return number;
};

ready(function (){
  console.log("hello! we are ready!");

  displayTime();
  setInterval(displayTime, 1000);
});