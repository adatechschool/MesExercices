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

let temp = 25 ;
let message;

switch (true) {
  case 0 :
    message = "Freezing weather.";
    break;
  case temp < 10:
    message = "Very cold weather.";
    break;
  case temp < 20:
    message = "Cold weather.";
    break;
  case temp < 30:
    message = "Normal in temp.";
    break;
  case temp < 40:
    message = "It's hot.";
    break;
  case temp > 40:
    message = "It's very hot.";
}

console.log(message);
