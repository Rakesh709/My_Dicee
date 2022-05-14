var randomNumber1 = Math.floor((Math.random()*6)+1);  //1-6

var randomImg = "dice" + randomNumber1 +".png";     // dice1.png-dice6.png

var randomImgSrc = "images/"+ randomImg ; 

var player1=document.querySelector("img");

player1.setAttribute("src",randomImgSrc)

document.querySelector("h1").innerHTML=randomNumber1