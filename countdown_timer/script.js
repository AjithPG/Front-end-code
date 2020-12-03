const newYear = "1 Jan 2021";

var daysEl = document.getElementById("days");
var hoursEl = document.getElementById("hours");
var minutesEl = document.getElementById("minutes");
var secondsEl = document.getElementById("seconds");

function counter(){

    const newYearDate = new Date(newYear);

    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


      daysEl.innerHTML = format(days);
      hoursEl.innerHTML = format(hours);
      minutesEl.innerHTML = format(minutes);
      secondsEl.innerHTML = format(seconds);

      function format(time){
          return time < 10 ? (`0${time}`) : time;
      }
}




setInterval(counter , 1000);