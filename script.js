let player = document.querySelectorAll(".player");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let selectionP1 = "";
let selectionP2 = "";

document.querySelector(".rock").addEventListener("click", selectRock);
document.querySelector(".paper").addEventListener("click", selectPaper);
document.querySelector(".scissors").addEventListener("click", selectScissors);

function selectRock() {
  selectionP1 = "rock";
  opponent();
}

function selectPaper() {
  selectionP1 = "paper";
  opponent();
}

function selectScissors() {
  selectionP1 = "scissors";
  opponent();
}

function opponent() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    selectionP2 = "rock";
  } else if (random == 1) {
    selectionP2 = "paper";
  } else {
    selectionP2 = "scissors";
  }
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  player1.className = "player";
  player2.className = "player";
  shakeHand();
}

function shakeHand() {
  player.forEach((p) => {
    p.classList.add("shake");
    p.addEventListener("animationend", result);
  });
}

function result() {
  this.classList.remove("shake");
  player1.classList.add(selectionP1);
  player2.classList.add(selectionP2);
  if (selectionP1 == selectionP2) {
    document.querySelector("#draw").classList.remove("hidden");
  } else if ((selectionP1 == "rock" && selectionP2 == "scissors") || (selectionP1 == "paper" && selectionP2 == "rock") || (selectionP1 == "scissors" && selectionP2 == "paper")) {
    document.querySelector("#win").classList.remove("hidden");
  } else {
    document.querySelector("#lose").classList.remove("hidden");
  }
}
