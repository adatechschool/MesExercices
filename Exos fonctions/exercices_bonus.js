
const number1 = window.prompt("Entre un chiffre")
const number2 = window.prompt("Entre un deuxième chiffre")

function multiply(num1, num2){
  return num1 * num2
}
const result = multiply(number1, number2)

function showResult(num1, num2, result)
{
let message = number1 + " multiplié par " + number2 + " est égal à " + result + "."
document.querySelector('h1').innerText = message;
}

showResult(number1, number2, result)