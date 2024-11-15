// let numbers = [12,21,2,45,14,23,51,47,63,36]

// console.log(numbers[0])
// console.log(numbers.length)

// let sports = ["plongée", "baseball"];
// let total = sports.push("football", "tennis");

// console.log(sports); // ["plongée", "baseball", "football", "tennis"]
// console.log(total); // 4

// let numbers = [12,21,2,45,14,23,51,47,63,36]

// for(let position = 0; position < 10 ; position++){
// 	console.log(numbers[position])
// }

// let numbers = [12,21,2,45,14,23,51,47,63,36]

// for(let index = 0; index < 10 ; index ++){
// 	console.log("Au tour " + index + ", l'élément du tableau est égal à " + numbers[index])
	
// 	if(numbers[index] % 2 == 0) {
// 		console.log("Le chiffre est pair !")
// 	} else {
// 		console.log("Le chiffre est impair !")
// 	}
// }

//Je déclare une première boucle qui va faire parcours i de 1 à 10.
// for (let i = 1; i <= 10; i++) {
//     // J'ignitialise une ligne string vide que je vais remplir au fur et à mesure
// let ligne = ""; 
// //Je créé une autre boucle dans la première boucle ! = boucle imbriquée
// //Cette boucle va faire parcourir j de 1 à 10
// for (let j = 1; j <= 10; j++) {
//     // J'ajoute le résultat de la multiplication à la ligne, 
//     // avec une tabulation pour l'espacement - le \t
//     ligne += (i * j) + "\t";
// }
// // J'affiche la ligne complète
// console.log(ligne); 
// }

//Exercice 1

// 1
//for(let index = 0; index < 100 ; index ++){
//     console.log(index)
// }

// 2
//let n = 0;

// while(n <100) {
//     n++;
// }
// console.log(n)

// let result = "";
// let i = 0;

// do {
//     i = i + 1;
//     result = result + i
// } while (i < 99);

// console.log(result)

//3. La boucle FOR semble plus appropriée : elle donne les nombres de chaque tour.

//4
// for(let index = 50; index < 100; index ++){
//     console.log(index)
// }

//5
// for(let index = 49; index > 0; index --){
//     console.log(index)
// }

//Exercice 2

// let letters = ['A', 'd', 'a', '-', 'T', 'e', 'c', 'h'];
// let message = '';

// for (let letter of letters) {
//   message += letters;
// }

// for (let i = 0; i < letters.length; i++) {
//   message += letters[i];
// }

// console.log(message); 

// let letters = [ 'A', 'd', 'a', '-', 'S', 'c', 'h', 'o', 'o', 'l']
// let message = '';


// for (let i = 0; i < letters.length; i++) {
//   message += letters[i];
// }

// console.log(message); 

//Exercice 3

let userNumber = prompt('Choisissez un nombre entre 0 et 10')
userNumber = parseInt(userNumber)

if (!isNaN(userNumber) && 0 <= userNumber <= 10){
    for (let index = userNumber; index >= 0; index--){
        console.log(index)
        }
} else {
   alert('Erreur ! Choisissez un nombre entre 0 et 10')
}