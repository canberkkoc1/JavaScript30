window.addEventListener("keydown", function (e) {
  const aSound = document.querySelectorAll(".audio");
  const buttons = document.querySelectorAll(".sounds");
  console.log(aSound);
  switch (e.keyCode) {
    case 65:
      aSound[0].play();
      buttons[0].style.borderColor = "greenyellow";
      setTimeout(function () {
        buttons[0].style.borderColor = "wheat";
      }, 800);
      break;
    case 83:
      aSound[1].play();
      buttons[1].style.borderColor = "greenyellow";
      setTimeout(function () {
        buttons[1].style.borderColor = "wheat";
      }, 800);
      break;
    case 68:
      aSound[2].play();
      buttons[2].style.borderColor = "greenyellow";
      setTimeout(function () {
        buttons[2].style.borderColor = "wheat";
      }, 800);
      break;
    case 70:
      aSound[3].play();
      buttons[3].style.borderColor = "greenyellow";
      setTimeout(function () {
        buttons[3].style.borderColor = "wheat";
      }, 800);
      break;
    case 71:
      aSound[4].play();
      buttons[4].style.borderColor = "greenyellow";
      setTimeout(function () {
        buttons[4].style.borderColor = "wheat";
      }, 800);
      break;
    case 72:
      aSound[5].play();
      buttons[5].style.borderColor = "greenyellow";
      setTimeout(function () {
        buttons[5].style.borderColor = "wheat";
      }, 800);
      break;
    case 74:
      aSound[6].play();
      buttons[6].style.borderColor = "greenyellow";
      setTimeout(function () {
        buttons[6].style.borderColor = "wheat";
      }, 800);
      break;

    default:
      alert("just press this keys");
      break;
  }
});
