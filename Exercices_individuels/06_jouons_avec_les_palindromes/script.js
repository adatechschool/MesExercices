function isValidDateFormat(datestring){ //fonction qui vérifie que la date est au format dd/mm/yyyy
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        return regex.test(datestring); //
}

function isValidDate(datestring){ //fonction qui vérifie que la date est valide : elle prend une string en argument
    if (!isValidDateFormat(datestring)){ //elle appelle la fonction isValidDateFormat pour vérifier que la date est au format dd/mm/yyyy
        console.log("Le format de la date n'est pas valide !"); //Si ce n'est pas le cas on affiche un message dans la console
        return false;
    }
    
    const dateArray = datestring.split("/").map(Number); //on déclare une variable dans laquelle on stocke la date sous forme de tableau (méthode split) et de number (méthode map) 
    const day = dateArray[0]; //on extrait le jour depuis le tableau, qu'on stocke dans une variable
    const month = dateArray[1]; //idem pour le mois
    const year = dateArray[2]; //idem pour l'année

    const date = new Date(year, month - 1, day); //on déclare une variable dans laquelle on crée un objet Date avec les variables day, month, year 
    
    if (                                      //on vérifie que chaque élément de la date existe dans le calendrier
        date.getFullYear() === year &&  //on compare l'année de l'objet date à la variable year
        date.getMonth() === (month - 1) && //idem pour le mois
        date.getDate() === day //idem pour le jour
    ){
        return true; //Si la date est existante
    } else {
        console.log("La date n'est pas valide !"); //Si ce n'est pas le cas on affiche un message dans la console
        return false;
    }
}

function cleanDate(datestring){  //fonction qui "nettoie" la date
    const slashes = /\//gi; //on désigne les "/" grâce au regex, on les mets dans une variable
    return datestring.replace(slashes, ""); // on les supprime avec la méthode replace
}

function isPalindrome(datestring){ //fonction qui vérifie que la date est un palindrome
    if (!isValidDate(datestring)){ //d'abord on appelle la fonction isValidDate, pour vérifier que la date est valide (bon format + existante)
        console.log("La date n'est pas valide !"); //Si ce n'est pas le cas on affiche un message dans la console
        return false;
    }

    const dateString = cleanDate(datestring);  //on déclare une variable qui contient la date "nettoyée" (string sans les slashs)
    const reversedString = dateString.split("").reverse().join(""); //dans une autre variable, on met la dateString dans un tableau (split), 
                                                                    //on renverse le tableau (reverse), on concatène les éléments dans une string (join)
    if (dateString === reversedString){  //on compare les deux variables (à l'endroit et à l'envers)
        console.log(`${datestring} est un palindrome !`); //si les deux variables sont égales, c'est un palindrome !
        return dateString === reversedString ;
    } else {
        //console.log(`${datestring} n'est pas un palindrome !`);
        return false;
    }
}

function formatDate(date){ //fonction qui formate les objets Date en string de type "dd/mm/yyyy"
    const day = String(date.getDate()).padStart(2, "0"); //on récupère la date du jour(getDate), on la met en 2 caractères(padStart) et on la formate en chaines de caractères avec la méthode String() 
    const month = String(date.getMonth() + 1).padStart(2, "0"); //idem pour le mois (on ajoute 1 parce que l'index des mois commence à 0)
    const year = date.getFullYear(); //on récupère l'année
    return `${day}/${month}/${year}`; //la fonction retourne un string "dd/mm/yyyy"
}

function getNextPalindromes(num){ //fonction qui renvoie le nombre (argument) des prochains palindromes à partir de la date d'aujourd'hui

    let currentDate = new Date(); //on déclare une variable avec l'objet Date d'aujourd'hui
    let numberOfFoundPalindromes = 0; //on déclare une variable qui démarre à 0 et qui comptera le nombre de palindromes trouvés

    while (numberOfFoundPalindromes < num){ // boucle while qui continue tant que le nbre de palindromes trouvés est inférieur au nombre passé en argument :
        const formattedDate = formatDate(currentDate); //on formate la date courante en string et avec des slash  
    
        if (isPalindrome(formattedDate)){  //on appelle la fonction isPalindrome avec la date formatée, qui vérifie si la date est un palindrome
               numberOfFoundPalindromes++; // si c'est un palindrome, on incrémente la variable numberOfFoundPalindromes de 1
        }

        currentDate.setDate(currentDate.getDate() + 1); //on ajoute 1 au jour de currentDate, pour passer à la date suivante 
    }

}


isPalindrome("26/09/19969");
isPalindrome("11/02/2011");

getNextPalindromes(23);
