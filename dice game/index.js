var randomNo1 = Math.floor(Math.random() * 6) + 1;
var img1Path = "images/dice" + randomNo1 + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src" , img1Path);

var randomNo2 = (Math.floor(Math.random()*6) + 1);
var img2Path = "images/dice" + randomNo2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src" , img2Path);

 if(randomNo1 > randomNo2) {
document.querySelector("h1").innerHTML = "player 1 win";
 }
 else if(randomNo2>randomNo1) {
document.querySelector("h1").innerHTML = "player2 win";
 }
 else{
     document.querySelector("h1").innerHTML = "draw!";
 }
