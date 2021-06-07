var randomnumber0=Math.floor(Math.random()*5)+1;
var randomimage0="images/dice" + randomnumber0 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomimage0)

var randomnumber1=Math.floor(Math.random()*5)+1;
var randomimage1="images/dice" + randomnumber1 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimage1)

if (randomnumber0> randomnumber1) {
    document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if(randomnumber1> randomnumber0){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML="Match Draw!!"
}


