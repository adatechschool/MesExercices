//améliorations a apporter : - permettre d'avoir plusieurs nombres dans une operation
// - gerer les erreurs (ex. : ne pas permettre de cliquer sur un operateur en premier)

const screen = document.querySelector(".screen-container");
const numberButtons = document.querySelectorAll(
  ".container-0, .container-1, .container-2, .container-3, .container-4, .container-5, .container-6, .container-7, .container-8, .container-9"
);
const operatorButtons = document.querySelectorAll(
  ".container-add, .container-substract, .container-multiply, .container-divide"
);
const acButton = document.querySelector(".container-AC");
const resultButton = document.querySelector(".container-result");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isEnteringSecondNumber = false; //variable qui permet de savoir si on est dans le 1er ou 2e nombre

// on affiche les chiffres
numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (!isEnteringSecondNumber) {
      //si on est sur le premier nombre

      firstNumber += event.target.value; //on concatene les chiffres des boutons dans firstNumber
      screen.textContent = firstNumber; //on affiche le nombre
    } else {
      secondNumber += event.target.value;
      screen.textContent = secondNumber;
    }
  });
});

// boucle pour gérer les opérateurs
operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    //au clic sur un operateur
    operator = event.target.value; //on récupère la valeur du bouton dans operator
    isEnteringSecondNumber = true; //on passe au second nombre
    screen.textContent = operator; //on affiche l'operateur
  });
});

// on calcule le résultat au clic sur le bouton "="
resultButton.addEventListener("click", () => {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "÷":
      result = num1 / num2;
      break;
    default:
      return;
  }

  screen.textContent = result; //on affiche le resultat
  firstNumber = result; //le resultat devient le 1er nombre
  secondNumber = ""; //on vide les autres variables
  operator = "";
  isEnteringSecondNumber = false; //
});

// on réinitialise la calculatrice
acButton.addEventListener("click", () => {
  firstNumber = ""; // au clic sur AC, on vide les variables
  secondNumber = "";
  operator = "";
  isEnteringSecondNumber = false;
  screen.textContent = "";
});
