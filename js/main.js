document.getElementById("arriba").onclick = up;
document.getElementById("derecha").onclick = right;
document.getElementById("izquierda").onclick = left;
document.getElementById("abajo").onclick = bottom;

function up(){
  console.log("arriba");
  $("#sailorMoon").animate({"top":"-=50px"}, "slow");

}

function right(){
  console.log("derecha");
  $("#sailorMoon").animate({"left":"+=50px"}, "slow");

}

function left(){
  console.log('izquierda');
  $("#sailorMoon").animate({"left":"-=50px"}, "slow");

}

function bottom(){
  console.log('abajo');
  $("#sailorMoon").animate({"top":"+=50px"}, "slow");

}
