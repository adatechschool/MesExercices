//étape 1

function askNumber(){
    let givenNumber = prompt('Choose a number')
    return givenNumber
}

const givenNumber2 = askNumber() 

//étape 2

/* function didIWin(userNumber)
{
    if (userNumber === 22)
        {
            alert("Bravo ! Vous avez deviné le nombre !")
        }  
    else {
            if (userNumber < 22) 
                {alert("Plus grand")}
            else
                {alert("Plus petit")}
         }
}        

function gamePlay(){
    let givenNumber = prompt('Entrez un nombre')
    didIWin(givenNumber)
} */

//gamePlay()

// étape 3

function didIwin (givenNumber) {
    if (givenNumber == 22) {
        return true;
    } else {
        return false;
    }
}     

function gamePlay() {
    let userEntry = askNumber();
    if (didIwin(userEntry)) {
        alert ("Yay, you win !");
    } else {
        alert("Wrong! Choose another number!");
        gamePlay(); 
     }
    
}
gamePlay ()

/* function gamePlay(){
    
    let givenNumber = prompt('Entrez un nombre')
    didIWin(givenNumber)
    }

    function askNumberToUser () {
        let givenNumber = prompt("Please enter a number"); 
        return givenNumber 
    } */
    /* function didIWin (givenNumber) {
        if (givenNumber < 22) {
            alert("Bigger");
        } else if (givenNumber > 22) {
            alert("Smaller");
        } else if (givenNumber == 22) {
            alert("Hooray ! You guess it !");
        }
    } */
        
        
    
    
    
    
    
        

// étape 4

/* function askPlayer1(){
    let Numberplayer1 = prompt("Choisissez un nombre entre 0 et 50")
    return Numberplayer1
}

let numberToGuess = askPlayer1()

function checkNumber(n) {
    n = Number(n);
    if (n < 0) 
    {
        alert('Type number between 0-50');
        n = 0;
    } 
        else if (n > 50) 
    {
        alert('Type number between 0-50');
        n = 50;
    } 
    else {
        alert('Valid number: ' + n);
    }
}

checkNumber(numberToGuess);  */