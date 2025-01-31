const screen = document.querySelector(".screen-container");
const buttons = document.querySelectorAll(".button");
const acButton = document.querySelector(".container-AC");
let firstNumber = "";
let secondNumber = "";
let operator = "";

// fonction pour afficher les chiffres sur l'écran
function displayFirstNumber(event) {
  firstNumber += event.target.value;
  screen.textContent = firstNumber;
}

function displaySecondNumber(event) {
  secondNumber += event.target.value;
  screen.textContent = secondNumber;
}

function displayOperator(event) {
  operator = event.target.value;
  screen.textContent = operator;
}

function displayResult() {
  const result = firstNumber + operator + secondNumber;
  screen.textContent = result;
}

function addNumber(event) {
  firstNumber += event.target.value;
  screen.textContent = firstNumber;
}

// fonction pour réinitialiser la calculatrice
function resetCalculator() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  screen.textContent = "";
}

// événements sur les boutons numériques
buttons.forEach((button) => {
  button.addEventListener("click", displayFirstNumber);
});

// Ajout d'un événement pour le bouton AC
acButton.addEventListener("click", resetCalculator);
