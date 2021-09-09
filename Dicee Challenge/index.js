var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Random 1-6 to select randomDiceImage

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1); //

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //Random 1-6 to select randomDiceImage

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins 🏆 ";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins 🏆 ";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
