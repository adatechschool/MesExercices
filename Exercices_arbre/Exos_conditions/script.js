//let maxNumber = 10
//let myNumber = 8

//let myNumberBiggerThanMax =  myNumber > maxNumber

//console.log(myNumberBiggerThanMax)

//Exercice 1
//let myNumber = 0
//let isMyNumberPositive = myNumber >= 0

//if (isMyNumberPositive) {
//  console.log("Mon nombre est positif")
//} else {
//  console.log("Mon nombre est négatif")
//}

//Exercice 2
//function canIDrive(prenom, age){
//  if (age >= 17){
//    console.log(prenom + " est autorisé(e) à conduire !")
//  } else {
//    console.log(prenom + " n'est pas autorisé(e) à conduire !")
//  }
//}

//canIDrive("Mathieu", 22)
//canIDrive("Léa", 15)
//canIDrive("Jean", 17)

//Exercice 3
//Je déclare une variable Température. 
//Si la température est inférieure à 0, on affiche "Freezing weather"
//Sinon, si la température est inférieure à 10, on affiche "Very cold weather"
//Sinon, si la température est inférieure à 20, on affiche "Cold weather"
//Sinon, si la température est inférieure à 30, on affiche "Normal in temp"
//Sinon, si la température est inférieure à 40, on affiche "It's hot"
//Sinon, on affiche "It's very hot"

//let temperature = 15 ;

//function howIsTheWeather(temp){
//  if (temp < 0){console.log("Freezing weather.")
//  } else
//    if (temp < 10) {console.log("Very cold weather.")
//    } else 
//      if (temp < 20) {console.log("Cold weather.")
//      } else 
//        if (temp < 30) {console.log("Normal in temp.")
//        } else 
//          if (temp < 40) {console.log("It's hot.")
//          } else {console.log("It's very hot.")}
// } ;

//howIsTheWeather(15);
//howIsTheWeather(35);
//howIsTheWeather(temperature);

// let temp = 0 ;
// let message;

// switch (true) {
//   case 0 :
//     message = "Freezing weather.";
//     break;
//   case temp < 10:
//     message = "Very cold weather.";
//     break;
//   case temp < 20:
//     message = "Cold weather.";
//     break;
//   case temp < 30:
//     message = "Normal in temp.";
//     break;
//   case temp < 40:
//     message = "It's hot.";
//     break;
//   case temp > 40:
//     message = "It's very hot.";
// }

// console.log(message);


//What number's bigger?
// function greaterNum(num1, num2){
//     if (num1 > num2){console.log("The greater number of " + num1 + " and " + num2 + " is " + num1 + ".")
//     } else {console.log("The greater number of " + num1 + " and " + num2 + " is " + num2 + ".")}
// }

// greaterNum(12, 28)
// greaterNum(5, 8)

//The World Translator

// function helloWorld(language){
//     if (language == "es"){console.log("Hola mundo!")
//         } else 
//     if (language == "pt"){console.log("Oi mundo!")
//         } else 
//     if (language == "fr"){console.log("Salut monde !")
//         } else {console.log("Hello world!")}
// }

// helloWorld("pt")
// helloWorld("es")
// helloWorld("es")
// helloWorld("de")

//The Grade Assigner
assignGrade(score){
if (score >= 18){console.log("Congrats, you've got an A")
    } else
if (score < 18 && score >= 16){console.log("Hey, you've got a B")
    } else
if (score < 16 && score >= 14){console.log("Hey, you've got a C")
    } else
if (score < 14 && score >= 12){console.log("Hey, you've got a D")
    } else {console.log("Ouch, you've got a F")
}}

assignGrade(13)
assignGrade(19)
assignGrade(8)
assignGrade(16)