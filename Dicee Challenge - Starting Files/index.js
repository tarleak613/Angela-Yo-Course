var rn1 = Math.floor(Math.random() * 6) + 1 ;
var rnimg1 = "./images/dice" + rn1 + ".png" ;
// document.querySelectorAll("img")[0].setAttribute("scr",rnimg1);
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", rnimg1);


var rn2 = Math.floor(Math.random() * 6) + 1;

var rnimg2 = "images/dice" + rn2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", rnimg2);
// document.querySelectorAll(".img2")[0].setAttribute("scr",rnimg2);



 if(rn1 < rn2) document.querySelector(".container h1").textContent="Player 2 Wins🚩";
 else if(rn1 > rn2) document.querySelector(".container h1").textContent="🚩Player 1 Wins";
 else if(rn1 === rn2) document.querySelector(".container h1").textContent="Draw";
























//first image
//  var randomeNo1 = Math.floor(Math.random() *6) + 1;

//  var randomImg1 = "images/dice" + randomeNo1 +".png";

//  document.querySelectorAll("img")[0].setAttribute("scr",randomImg1);
//  //second image

//  var randomeNo2 = Math.floor(Math.random() *6) + 1;
//  var randomImg2 = "images/dice" + randomeNo2 +".png";
//  document.querySelectorAll("img")[1].setAttribute("scr",randomImg2);

//  if(randomeNo1 > randomeNo2) document.querySelector(".container h1").textContent="Player 2 Wins🚩";
//  else if(randomeNo1 < randomeNo2) document.querySelector(".container h1").textContent="🚩Player 1 Wins";
//  else if(randomeNo1 === randomeNo2) document.querySelector(".container h1").textContent="Draw";

//  // if(randomeNo1 === 1)  document.querySelector(".img1").setAttribute("scr","./images/dice1.png");  
//  // if(randomeNo1 === 2)  document.querySelector(".img1").setAttribute("scr","./images/dice2.png");  
//  // if(randomeNo1 === 3)  document.querySelector(".img1").setAttribute("scr","./images/dice3.png");  
//  // if(randomeNo1 === 4)  document.querySelector(".img1").setAttribute("scr","./images/dice4.png");  
//  // if(randomeNo1 === 5)  document.querySelector(".dice img1").setAttribute("scr","./images/dice5.png");  
//  // if(randomeNo1 === 6)  document.querySelector(".dice img1").setAttribute("scr","./images/dice6.png");  
//  // if(randomeNo2 === 1)  document.querySelector(".dice img1").setAttribute("scr","./images/dice1.png");  
//  // if(randomeNo3 === 2)  document.querySelector(".dice img1").setAttribute("scr","./images/dice2.png");  
//  // if(randomeNo4 === 3)  document.querySelector(".dice img1").setAttribute("scr","./images/dice3.png");  
//  // if(randomeNo5 === 4)  document.querySelector(".dice img1").setAttribute("scr","./images/dice4.png");  
//  // if(randomeNo === 5)   document.querySelector(".dice img1").setAttribute("scr","./images/dice5.png");  
//  // if(randomeNo6 === 6)  document.querySelector(".dice img1").setAttribute("scr","./images/dice6.png");   