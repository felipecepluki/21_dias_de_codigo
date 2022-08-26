const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const myBirthday = new Date("April 19 2023 00:00:00").getTime();

function updateCountdown() {
  const currentDate = new Date().getTime();
  const gap = myBirthday - currentDate;

  const oneSecond = 1000;
  const oneMinute = oneSecond * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;

  const d = Math.floor(gap / oneDay);
  const h = Math.floor((gap % oneDay) / oneHour);
  const m = Math.floor((gap % oneHour) / oneMinute);
  const s = Math.floor((gap % oneMinute) / oneSecond);

  console.log(d);
  console.log(h);
  console.log(m);
  console.log(s);

  document.getElementById("day").innerHTML = d;
  document.getElementById("hour").innerHTML = m < 10 ? "0" + m : m;
  document.getElementById("minute").innerHTML = m;
  document.getElementById("second").innerHTML = s;
}

setInterval(updateCountdown, 1000);
