let myCar = document.getElementById("mycar");
let enemy1 = document.getElementById("enemycar1");
let enemy2 = document.getElementById("enemycar2");
let enemy3 = document.getElementById("enemycar3");
let enemy4 = document.getElementById("enemycar4");

let t = 75;
let l = 43;

window.addEventLitener("keydown", function (x) {
  if (x.keyCode == 87) {
    t = t - 3;
  }
  if (x.keyCode == 68) {
    l = l + 1;
  }
  if (x.keyCode == 83) {
    t = t + 3;
  }
  if (x.keyCode == 87) {
    l = l - 1;
  }
  myCar.style.top = `${t}vh`;
  myCar.style.left = `${l}vw`;
});
