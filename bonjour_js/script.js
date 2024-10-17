// exo 1
//let message = "Bonjour !"
//console.log(message)

//let firstName = "Beyonce"
//message = "Bonjour " + firstName + " !"

//console.log(message)

//exo 2
//function sayHello(name)
//{
//console.log("Bonjour à toi", name)
//}

//let myName = "Ada Lovelace"
//let yourName = "Futur.e développeur.se"

//sayHello(myName)
//sayHello(yourName)

//exo 3
//function add(number1, number2)
//    {
//    console.log("La somme est égale à", number1 + number2)
//    }

//let ten = 10
//let eight = 8
//let nine = 9

//add(ten, nine)
//add(nine, eight)

//exo 4
//function add(number1, number2)
//{
//    return (number1 + number2)
//}

//let ten = 10
//let eight = 8

//let result = add(ten, eight)

//console.log("La somme est égale à", result)

//Pratiquer - Exo 1.1

//function addition3Numbers()
//{
//    console.log("Le résultat de la somme est" + (1 + 2 +3))
//}

//addition3Numbers()

//Pratiquer - Exo 1.2

//function addition3NumbersWithArg(arg1, arg2, arg3)
//{
//    console.log("Le résultat de la somme est", arg1 + arg2 + arg3)
//}

//let number1 = 3
//let number2 = 4
//let number3 = 5

//addition3NumbersWithArg(number1, number2, number3)

//let number4 = 8
//let number5 = 10
//let number6 = 12

//addition3NumbersWithArg(number5, number2, number6)
//addition3NumbersWithArg(number4, number5, number3)

//Pratiquer - Exo 2
//2.1
//function square(number)
//{
//    console.log(number * number)
//}

//square(3)
//square(2)

//Pratiquer - Exo 2.2
function square(number1)
{
    return(number1 * number1)
}

let number1 = 3
let result = square(number1)

console.log(square(number1))

function multiply10(result)
{
    console.log(result * 10)
}

multiply10(result)

//Pratiquer - Exo 2.3

//let userNumber = prompt('Entrez un nombre :');

//function square(number)
//{
//    return(number * number)
//}

//function multiply10(carre)
//{
//    return(carre * 10)
//}

//let squareResult = square(userNumber)
//let result = multiply10(squareResult)

//console.log(squareResult)
//console.log(result)

//Pratiquer - Exo 3

//function sendMessage(message, fromName, toName)
//{
//	console.log("From : " + fromName + " to : " + toName + " Message : " + message)
//}

//let contactName = "Jean"
//let myName = "Ada"
//let myMessage = "Je t'apprends à coder tes premières fonctions"

//sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");
//sendMessage("Super on se voit mardi !", "Linda", "Marc")

//Plus d'exos - enoncés : https://www.teaching-materials.org/javascript/exercises/functions

//The fortune teller

//function tellFortune(numberOfChildren, partnersName, geographicLocation, jobTitle)
//{
//console.log("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnersName + " with " + numberOfChildren + " kids.")
//} 

//tellFortune(4, "Leo", "New York", "model")
//tellFortune(2, "Pierre", "Paris", "developper")
//tellFortune(0, "Carmen", "Rio", "farmer")

//The Puppy Age Calculator

//function calculateDogAge(age)
//{
//    let dogYears = age *7
//    console.log ("Your doggie is " + dogYears + " years old in dog years!")
//}

//calculateDogAge(3)
//calculateDogAge(8)
//calculateDogAge(12)

//The lifetime Supply Calculator

//function calculateSupply(age, amountPerDay)
//{
//     let maxAge = 100;
//     let total = (amountPerDay * 365) * (maxAge - age)

//     console.log("You will need " + total + " coffees to last you until the ripe old age of " + maxAge + ".")
//}

//calculateSupply(39, 2)
//calculateSupply(45, 3)
//calculateSupply(18, 5)


