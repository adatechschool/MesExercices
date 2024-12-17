//Exo 1

// function AddArrayNumbers(array) {
//   // console.log(array);
//   // console.log(Array.isArray(array));
//   let result = 0;
//   if (Array.isArray(array)) {
//     for (let i = 0; i < array.length; i++) {
//       let value = array[i];
//       if (isNaN(value)) {
//         continue;
//       }
//       result += value;
//     }
//   } else {
//     console.log("Erreur: Vous devez passer un tableau de nombres");
//     return "Erreur: Vous devez passer un tableau de nombres";
//   }

//   console.log(result);
//   return result;
// }

// AddArrayNumbers([1, 2, 3, 4]); // Devrait retourner 10
// AddArrayNumbers([1, 2]); // Devrait retourner 3
// AddArrayNumbers([0]); // Devrait retourner 0
// AddArrayNumbers([1, 0]); // Devrait retourner 1

// AddArrayNumbers([1, "Haha"]); // Devrait retourner 1
// AddArrayNumbers(); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
// AddArrayNumbers("Huhu"); // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"

//Exo 2

function genererAbonnementUtilisateur(estAbonne) {
  if (estAbonne == true) {
    return `Abonné`;
  } else {
    return `Non abonné`;
  }
}

function genererCategorieUtilisateur(age) {
  if (age < 18) {
    return `Jeune`;
  } else if (age >= 18 && age < 60) {
    return `Adulte`;
  } else {
    return `Senior`;
  }
}

function genererRapportUtilisateur(nom, age, ville, profession, estAbonne) {
  let statut = genererAbonnementUtilisateur(estAbonne);
  let categorie = genererCategorieUtilisateur(age);
  let rapport = `Rapport utilisateur :\n`;
  rapport += `Nom : ${nom} \n`;
  rapport += `Age : ${age} ans\n`;
  rapport += `Ville : ${ville} \n`;
  rapport += `Profession : ${profession} \n`;
  rapport += `statut : ${statut} \n`;
  rapport += `categorie : ${categorie} \n`;
  console.log(rapport);
  return rapport;
}

genererRapportUtilisateur("Michel", 42, "Lyon", "Dev", true);
genererRapportUtilisateur("Louise", 14, "Paris", "Collégienne", false);
