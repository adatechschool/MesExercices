function askNumber(){
    window.prompt('Entrez un nombre')
}

let givenNumber = askNumber()

//const givenNumber = window.prompt('Entrez un nombre')

let response = givenNumber 

function didIWin(response){
    if 
        (response == 22)
        alert("Bravo ! Vous avez deviné le nombre !")    
    if 
        (response < 22) 
        alert("Plus grand")
    else
       // (response > 22)
        alert("Plus petit")
   
}

didIWin(response)