"use strict";

console.log("Hello world!");

let gamesWonUser = 0;
let gamesWonComputer = 0;

// getComputerChoice() a function which returns either: 'Rock', 'Paper' or 'Scissors'

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

// A function that gets the users input
function playerSelection() {
  let str = prompt("Choose: Rock', 'Paper' or 'Scissors");
  str = str.toLowerCase();
  str = str.charAt(0).toLocaleUpperCase() + str.slice(1);
  if (str === "Rock" || str === "Paper" || str === "Scissors") return str;
  else return -1;
}

// A function that plays a round of Rock,Paper,Scissors

function playRound(playerSelection, getComputerChoice) {
  if (playerSelection === getComputerChoice) {
    gamesWonComputer++;
    gamesWonUser++;
    return `It's a tie! You both picked ${playerSelection}`;
  } else if (playerSelection === "Paper" && getComputerChoice === "Rock") {
    gamesWonUser++;
    return `You Win! ${playerSelection} beats ${getComputerChoice}`;
  } else if (playerSelection === "Rock" && getComputerChoice === "Paper") {
    gamesWonComputer++;
    return `You Lose! ${getComputerChoice} beats ${playerSelection}`;
  } else if (playerSelection === "Rock" && getComputerChoice === "Scissors") {
    gamesWonUser++;
    return `You Win! ${playerSelection} beats ${getComputerChoice}`;
  } else if (playerSelection === "Scissors" && getComputerChoice === "RocK") {
    gamesWonComputer++;
    return `You Lose! ${getComputerChoice} beats ${playerSelection}`;
  } else if (playerSelection === "Scissors" && getComputerChoice === "Paper") {
    gamesWonUser++;
    return `You Win! ${playerSelection} beats ${getComputerChoice}`;
  } else if (playerSelection === "Paper" && getComputerChoice === "Scissors") {
    gamesWonComputer++;
    return `You Lose! ${getComputerChoice} beats ${playerSelection}`;
  } else return `You didn't input the correct value`;
}

// A function that plays a game

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}: `);
    let playerUser = playerSelection();
    let playerComputer = getComputerChoice();
    console.log(`You picked: ${playerUser}`);
    console.log(`The computer picked: ${playerComputer}`);
    console.log(playRound(playerUser, playerComputer));
  }
  if (gamesWonComputer === gamesWonUser)
    console.log(
      `It's a Tie! Wins Computer: ${gamesWonComputer}, Wins user: ${gamesWonUser}`
    );
  else if (gamesWonComputer > gamesWonUser)
    console.log(
      `The computer Win! Wins Computer: ${gamesWonComputer}, Wins user: ${gamesWonUser}`
    );
  else
    console.log(
      `You Win! Wins Computer: ${gamesWonComputer}, Wins user: ${gamesWonUser}`
    );
}

playGame();
