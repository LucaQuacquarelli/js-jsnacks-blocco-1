// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.
function randomMatch(name, surname) {
    randomName = Math.floor(Math.random() * name.length);
    randomSurname = Math.floor(Math.random() * surname.length);
    return name[randomName] + " " + surname[randomSurname];
}

var nameList = ["Pancrazio", "Candeloro", "Isidoro", "Consolato", "Carmelo", "Immacolata", "Annunziata", "Gioconda", "Germana", "Cesarina"];
var surnameList = ["Scozzafava", "Disgraziati", "Testagrossa", "Schifone", "Picciotto", "Inutile", "Cazzaro", "Diobono", "Lacavalla", "Fattapposta"];

for (var i = 0; i < 10; i++) {
    document.getElementById("list").innerHTML += "<li>" + randomMatch(nameList, surnameList) + "</li>"
}
