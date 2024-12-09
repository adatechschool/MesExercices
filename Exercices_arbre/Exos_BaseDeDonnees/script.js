//Exo 1

// const candidates = [
//   "Le Filip",
//   "Ruby On The Nail",
//   "Leona Winter",
//   "Lula Strega",
//   "Misty Phoenix",
//   "Perseo",
//   "Norma Bell",
//   "Edeha Noire",
//   "Magnetica",
//   "Afrodite Amour",
// ];

// const list = document.getElementById("candidates");

// candidates.forEach((candidate) => {
//   list.innerHTML += `<li>${candidate}</li>`;
// });

// console.log(candidates[0]);
// console.log(candidates[7]);
// console.log(candidates);

//Exo 2

// const obj = {
//   candidate: "Le Filip",
//   age: 29,
//   city: "Paris",
//   region: "Île-de-France",
// };

// const data = [
//   {
//     candidate: "Afrodite Amour",
//     age: 27,
//     city: "Lyon",
//     region: "Auvergne-Rhône-Alpes",
//   },
//   {
//     candidate: "Edeha Noire",
//     age: 34,
//     city: "Lyon",
//     region: "Auvergne-Rhône-Alpes",
//   },
//   {
//     candidate: "Le Filip",
//     age: 29,
//     city: "Paris",
//     region: "Île-de-France",
//   },
// ];

// //console.log(obj.candidate);
// data.forEach((element) => {
//   console.log(element.candidate);
// });

//Exo 3

const fs = require("fs");
const filepath = "data.json";

const content = fs.readFileSync(filepath, { encoding: "utf8", flag: "r" });
const data = JSON.parse(content);
// write your code below

data.forEach((people) => {
  if (people.ranking === 4) {
    console.log(people);
  }
});

// function findValue(tab, value) {
//   //fonction qui prend en paramètre un tableau et une valeur
//   const result = data.find((element) => Object.values(element).includes(4)); //constant dans laquelle on stocke la valeur recherchée
//   // on cherche un élément              dont la valeur inclut 4
//   console.log(result);
// }
// findValue(data, 4);

// let totalAge = 0;
// data.forEach((people) => {
//   totalAge += people.age;
// });
// console.log(totalAge / data.length);

// console.log(typeof (data));
// console.log(data[0]);
// console.log(data.length);
// console.log((data.ranking.value = 4));
