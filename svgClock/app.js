const secondsBar = document.querySelector(".second");
const hourBar = document.querySelector(".hour");
const minBar = document.querySelector(".minute");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDeg = (seconds / 60) * 360 + 90;
  secondsBar.style.transform = `rotate(${secondsDeg}deg)`;

  const min = now.getMinutes();
  const minDeg = (min / 60) * 360 + 90;
  minBar.style.transform = `rotate(${minDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = (hour / 12) * 360 + 90;
  hourBar.style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(setDate, 1000);
