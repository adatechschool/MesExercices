function isValidDateFormat(datestring){
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        return regex.test(datestring);
}

function isValidDate(datestring){
    if (!isValidDateFormat(datestring)){
        console.log("Le format de la date n'est pas valide !");
        return false;
    }
    
    const dateArray = datestring.split("/").map(Number);
    const day = dateArray[0];
    const month = dateArray[1];
    const year = dateArray[2];

    const date = new Date(year, month - 1, day);
    
    if (
        date.getFullYear() === year &&
        date.getMonth() === (month - 1) &&
        date.getDate() === day 
    ){
        return true;
    } else {
        console.log("La date n'est pas valide !");
        return false;
    }
}

function cleanDate(datestring){
    const slashes = /\//gi;
    return datestring.replace(slashes, "");
}

function isPalindrome(datestring){
    if (!isValidDate(datestring)){
        console.log("La date n'est pas valide !");
        return false;
    }

    const dateString = cleanDate(datestring);
    const reversedString = dateString.split("").reverse().join("");

    if (dateString === reversedString){
        console.log(`${datestring} est un palindrome !`);
    } else {
        console.log(`${datestring} n'est pas un palindrome !`);
        return false;
    }

}

function getNextPalindromes(num){

    const numberOfPalindromes = num;
    
    let n = 0;
    while (n < num){
        n++;
    }

}


isPalindrome("26/09/1999");
isPalindrome("11/02/2011");
