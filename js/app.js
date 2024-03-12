// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma:
// la funzione deve ritornare true se la parola è palindroma
// deve ritornare false se la parola non è palindroma
// alla fine stampate in console un messaggio per dire all’utente il risultato del controllo


// Creare la funzione

// function isPalindrome(word) {
//     // Trasformare la parola in un array
//     const wordToArray = word.split("");
//     // console.log(wordToArray);

//     // Invertire l'array
//     const invertedArray = wordToArray.reverse();
//     // console.log(invertedArray)

//     // Ritrasformare l'array invertito in una stringa
//     const invertedWord = invertedArray.join("")
//     // console.log(invertedWord.toLowerCase())

//     // Controllare se la parola invertita e la parola originale sono uguali
//     return invertedWord.toLowerCase() === word.toLowerCase()
// }

// const userWordCheck = isPalindrome(prompt('Inserisci una parola'))
// // console.log(userWordCheck);

// if (userWordCheck) {
//     console.log('La parola inserita é palindroma');
// } else {
//     console.log('La parola inserita non é palindroma');
// }



// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// recupero i bottoni pari e dispari dal DOM
const evenButtonDOMElement = document.getElementById('even')
const oddButtonDOMElement = document.getElementById('odd')

// l'user sceglie pari 
evenButtonDOMElement.addEventListener('click', function() {
    // l'user inserisce un numero da 1 a 5
    const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'))
    console.log('user', userNumber);

    // generare un numero random da 1 a 5
    const computerNumber = generateRandomNumber()
    console.log('computer', computerNumber);

    // sommare i due numeri 
    const sum = userNumber + computerNumber 
    console.log('sum', sum);

    // funzione per stabilire se la somma è pari o dispari  (true = pari | false = dispari)
    const result = isEven(sum) 
    console.log(result);

    // dichiariamo il vincitore 
    if (result) {
        console.log('HAI VINTO!')
    } else {
        console.log('HAI PERSO!');
    }
})

// l'user sceglie dispari 
oddButtonDOMElement.addEventListener('click', function() {
    // l'user inserisce un numero da 1 a 5
    const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'))
    console.log('user', userNumber);

    // generare un numero random da 1 a 5
    const computerNumber = generateRandomNumber()
    console.log('computer', computerNumber);

    // sommare i due numeri 
    const sum = userNumber + computerNumber 
    console.log('sum', sum);

    // funzione per stabilire se la somma è pari o dispari  (true = pari | false = dispari)
    const result = isEven(sum) 
    console.log(result);

    // dichiariamo il vincitore 
    if (result) {
        console.log('HAI PERSO!');
    } else {
        console.log('HAI VINTO!');
    }
})


function generateRandomNumber() {
    const random1to5Number = Math.floor(Math.random() * 5) + 1
    // console.log('random', random1to5Number);
    return random1to5Number
}
 
function isEven(number) {
    const rest = number % 2 
    return rest === 0
}
 

