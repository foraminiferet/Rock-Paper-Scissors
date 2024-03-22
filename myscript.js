"use strict";

// The beginning game  conditions and variable we will be working with

let gamesWonUser = 0;
let gamesWonComputer = 0;
let round = 1;
const btnContainer = document.querySelectorAll(".btnContainer");
const gameText = document.querySelector(".gameText");
const reset = document.querySelector(".reset");
const msg = document.querySelector(".msg");
const imagesContainer = document.querySelector(".imageContainer");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const computerImg = document.querySelector(".computerImage img");
const playerImg = document.querySelector(".playerImage img");

btnContainer.forEach((btn) => {
  btn.addEventListener("click", playRound);
});

// A function that generates the computers choice, returns either: 'Rock', 'Paper' or 'Scissors'

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
    case 3:
      return "Rock";
      break;
  }
}

// A reset button, to play the game again

reset.addEventListener("click", function () {
  gamesWonComputer = 0;
  gamesWonUser = 0;
  round = 1;
  gameText.textContent = "";
  computerPoints.textContent = `${gamesWonComputer}`;
  playerPoints.textContent = `${gamesWonUser}`;
  msg.textContent =
    "First one to win 5 rounds is the winner! ( Ties don't count as wins ) Good Luck!";
  btnContainer.forEach((btn) => {
    btn.addEventListener("click", playRound);
  });
  console.clear();
  imagesContainer.classList.add("hidden");
});

// A function for checking the game winner

function checkGameState(gamesWonUser, gamesWonComputer) {
  if (gamesWonComputer === 5 || gamesWonUser === 5) {
    btnContainer.forEach((btn) => {
      btn.removeEventListener("click", playRound);
    });
    gameText.textContent =
      gamesWonComputer === 5
        ? "Sorry You lost the computer won 5 rounds! The game has ended ( press Reset Button to play again )."
        : "Congratulations You won 5 rounds! The game has ended ( press Reset Button to play again ).";
  }
}

// A function that plays a round of Rock,Paper,Scissors and display the choices

function playRound(event) {
  let computerChoice = getComputerChoice();
  let playerSelection = event.target.textContent;
  imagesContainer.classList.remove("hidden");
  msg.textContent = `Round ${round}:`;
  round++;
  switch (playerSelection) {
    case "Rock":
      playerImg.src = "./images/rock.png";
      if (computerChoice === "Rock") {
        computerImg.src = "./images/rock.png";
        gameText.textContent = "It's a Tie!";
      } else if (computerChoice === "Paper") {
        gamesWonComputer++;
        computerImg.src = "./images/paper.png";
        gameText.textContent = "You lost this round. Paper beats Rock!";
      } else {
        gamesWonUser++;
        computerImg.src = "./images/scissors.png";
        gameText.textContent = "You won this round. Rock beats Scissors!";
      }
      break;
    case "Paper":
      playerImg.src = "./images/paper.png";
      if (computerChoice === "Paper") {
        gameText.textContent = "It's a Tie!";
        computerImg.src = "./images/paper.png";
      } else if (computerChoice === "Scissors") {
        gamesWonComputer++;
        computerImg.src = "./images/scissors.png";
        gameText.textContent = "You lost this round. Scissors beats Paper!";
      } else {
        gamesWonUser++;
        computerImg.src = "./images/rock.png";
        gameText.textContent = "You won this round. Paper beats Rock!";
      }
      break;
    case "Scissors":
      playerImg.src = "./images/scissors.png";
      if (computerChoice === "Scissors") {
        gameText.textContent = "It's a Tie!";
        computerImg.src = "./images/scissors.png";
      } else if (computerChoice === "Rock") {
        gamesWonComputer++;
        computerImg.src = "./images/rock.png";
        gameText.textContent = "You lost this round. Rock beats Scissors!";
      } else {
        gamesWonUser++;
        computerImg.src = "./images/paper.png";
        gameText.textContent = "You won this round.Scissors beats Paper!";
      }
      break;
  }
  computerPoints.textContent = `${gamesWonComputer}`;
  playerPoints.textContent = `${gamesWonUser}`;
  checkGameState(gamesWonUser, gamesWonComputer);
}
