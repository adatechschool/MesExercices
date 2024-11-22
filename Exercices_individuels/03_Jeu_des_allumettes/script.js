//Etape 6
// const gameText = document.getElementById("gameText");
// const comment = document.getElementById("comment");
// const userInput = document.getElementById("userInput");
// const matchesContainer = document.getElementById("matchesContainer");
// const matchesNumber = document.getElementById("matchesNumber");


//Etape 5

let numberOfMatches = 50;  //nombre d'allumettes (initialisé à 50)
let userNumber;            //nombre choisi par l'utilisateur
let currentPlayer = 1;     //joueur en action (initialisé à 1)
let numberOfPlayers;       //nombre de joueurs

function gameStart(){  //déclaration de fonction qui demande le nombre de joueurs en début de partie
numberOfPlayers = parseInt(prompt("Combien de joueurs êtes-vous ?"))
return numberOfPlayers
}

function askPlayer(){  //déclaration de fonction qui demande à l'utilisateur combien d'allumettes il veut enlever
    userNumber = parseInt(prompt("Joueur " + currentPlayer + ", combien d'allumettes voulez-vous retirer ?"));
    return userNumber;
}

function removeMatch(number){ //déclaration de fonction qui retire le nombre d'allumettes indiqué par l'utilisateur
    numberOfMatches = numberOfMatches - number;
    console.log("Il reste " + numberOfMatches + " allumettes !")
}

function switchPlayer(){ //déclaration de fonction qui incrémente la valeur du joueur en action et qui la réinitialise à 1 dès que le nombre de joueurs est dépassé
    currentPlayer++;
    if (currentPlayer > numberOfPlayers){
        currentPlayer = 1;
    }
}

function game(){ //déclaration de fonction game
    
    gameStart()  //on demande le nombre de joueurs

    while (isNaN(numberOfPlayers)) {  //boucle qui redemande le nombre de joueurs tant qu'on ne rentre pas un nombre
        alert("Donnez un nombre");
        gameStart();
    }
    
    while (numberOfMatches > 0){  //boucle qui continue à demander le nombre d'alumettes à retirer tant qu'il y a des allumettes
        askPlayer();

        while (isNaN(userNumber) || userNumber < 1 || userNumber > 6) { // boucle qui demande un nombre tant que la réponse de l'utilisateur n'est pas un nombre ou qu'elle est pas comprise entre 1 et 6
            alert("Le nombre doit être compris entre 1 et 6");
            askPlayer()
        }

        while (userNumber > numberOfMatches) { //boucle qui vérifie qu'on ne peut pas retirer plus d'allumettes que les allumettes qui restent
            alert("Le nombre est trop grand, réessayez");
            askPlayer()
        }

        removeMatch(userNumber) //appel de la fonction qui enlève des allumettes
        
        if (numberOfMatches <= 0){ // fin du jeu et de la boucle, quand le nombre d'allumettes atteint 0
            console.log("Plus d'allumettes, joueur " + currentPlayer + " vous avez gagné !");
            break
        }

        switchPlayer() // appel de la fonction qui passe au joueur suivant (= incrémente la valeur de currentPlayer)
        
    }        
}

game()


//Etape 4

// let numberOfMatches = 50;
// let userNumber;
// let currentPlayer = "Joueur 1";




// function askPlayer(){
//     userNumber = parseInt(prompt(currentPlayer + ", Combien d'allumettes voulez-vous retirer ?"));
//     return userNumber;
// }

// function removeMatch(number){
//     numberOfMatches = numberOfMatches - number;
//     console.log("Il reste " + numberOfMatches + " allumettes !")
// }

// function switchPlayer(){
//     if (currentPlayer == "Joueur 1"){
//         currentPlayer = "Joueur 2"
//     } else {
//         currentPlayer = "Joueur 1"
//     }
// }

// function game(){
    

//     while (numberOfMatches > 0){  //boucle qui continue à demander de retirer des alumettes tant qu'il y a des allumettes
//         askPlayer();

//         while (isNaN(userNumber) || userNumber < 1 || userNumber > 6) { // boucle qui vérifie que le nombre est bien un nombre et qu'il est compris entre 1 et 6
//             alert("Le nombre doit être compris entre 1 et 6");
//             askPlayer()
//         }

//         while (userNumber > numberOfMatches) { //boucle qui vérifie qu'on ne peut pas retirer plus d'allumettes que les allumettes qui restent
//             alert("Le nombre est trop grand, réessayez");
//             askPlayer()
//         }

//         removeMatch(userNumber)
        

//         if (numberOfMatches <= 0){ // fin du jeu et de la boucle, quand le nombre d'allumettes atteint 0
//             console.log("Plus d'allumettes, " + currentPlayer + " vous avez gagné !");
//             break
//         }

//         switchPlayer()
        
//     }        
// }


// game()


// for(let i = 50; i = 0; (i - userNumber)){
//     game()
// }

// while (numberOfMatches >= 0) {
//     game()
    
// }

// while (userNumber > numberOfMatches && numberOfMatches > 0) {
//     alert("Le nombre est trop grand, réessayez");
//     askPlayer()
// }

//let n = 0;

// while(n <100) {
//     n++;
// }
// console.log(n)

// if (!isNaN(userNumber) && userNumber >= 1 && userNumber <= 6) {
//     ; 
//    } else {alert("Le nombre doit être compris entre 1 et 6");
//     askPlayer()}







