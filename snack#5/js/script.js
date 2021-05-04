// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
function isOdd(value, array) {

    return (value % 2 != 0)
}

// Crea un array vuoto.
var emptyArray = []
// Chiedi per 6 volte all’utente di inserire un numero,
for (var i = 0; i < 6; i++) {
    var number = parseInt(prompt("Inserisci un numero"));

    if (isOdd(number)) {
        emptyArray.push(number)
    }
}

// Stampa l'array nella console.
console.log(emptyArray);