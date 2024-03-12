// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma:
// la funzione deve ritornare true se la parola è palindroma
// deve ritornare false se la parola non è palindroma
// alla fine stampate in console un messaggio per dire all’utente il risultato del controllo


// Creare la funzione

function isPalindrome(word) {
    // Trasformare la parola in un array
    const wordToArray = word.split("");
    // console.log(wordToArray);

    // Invertire l'array
    const invertedArray = wordToArray.reverse();
    // console.log(invertedArray)

    // Ritrasformare l'array invertito in una stringa
    const invertedWord = invertedArray.join("")
    // console.log(invertedWord.toLowerCase())

    // Controllare se la parola invertita e la parola originale sono uguali
    return invertedWord.toLowerCase() === word.toLowerCase()
}

const userWordCheck = isPalindrome(prompt('Inserisci una parola'))
// console.log(userWordCheck);

if (userWordCheck) {
    console.log('La parola inserita é palindroma');
} else {
    console.log('La parola inserita non é palindroma');
}
 

