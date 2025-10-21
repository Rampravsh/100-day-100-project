// Selecting DOM elements
let time = document.querySelector(".time");
let target = document.querySelector(".target");
let score = document.querySelector(".score");
let container = document.querySelector(".container");


const totalBox = 60;
let leftTime = 10;

// Function to generate a random number
const randomNumGen = () => {
  return Math.ceil(Math.random() * 10);
};
// console.log(randomNumGen()); // For debugging: logs a random number

let timerInterval;

// Function to start the timer
const timeGen = () => {
  timerInterval = setInterval(() => {
    // Stop the timer if it reaches 0
    if (leftTime === 0) {
      clearInterval(timerInterval);
      gameOver();
      return;
    }
    leftTime--;
    time.children[0].innerText = leftTime;
  }, 1000);
};
timeGen();

// Function to generate a new target number for the player to hit
const targetGen = () => {
  target.children[0].innerText = randomNumGen();
};
// Initialize the target number when the game starts
targetGen();

// Function to generate the bubbles (number boxes) on the game board
const randomBoxGen = () => {
  container.innerHTML = ""; // Clear existing bubbles
  for (let i = 0; i < totalBox; i++) {
    // Loop to create 'totalBox' number of bubbles
    let box = document.createElement("div"); // Create a new div element for each bubble
    box.classList.add("numBox"); // Add the 'numBox' class for styling
    box.innerText = randomNumGen(); // Set the bubble's text to a random number
    container.appendChild(box); // Add the bubble to the game container
  }
};
// Populate the game board with initial bubbles
randomBoxGen();

const addEventListeners = () => {
  score.children[0].innerText = "0";
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("numBox")) {
      if (e.target.innerText === target.children[0].innerText) {
        score.children[0].innerText = Number(score.children[0].innerText) + 10;
      }
      targetGen();
    } else if (e.target.classList.contains("resetBtn")) {
      leftTime = 10;
      time.children[0].innerText = leftTime;
      score.children[0].innerText = "0";
      randomBoxGen();
      targetGen();
      timeGen();
    }
  });
};
addEventListeners();

const gameOver = () => {
  container.innerHTML = "";
  let gameOverBox = document.createElement("div");
  gameOverBox.innerHTML = `
    <div class="gameOver">
      <h1>Game Over</h1>
      <h2>Score :${score.children[0].innerText}</h2>
      <buttton class="resetBtn">Reset</buttton>
    </div>
  `;
  container.append(gameOverBox);
};
