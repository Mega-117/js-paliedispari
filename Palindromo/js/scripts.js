//chiedere al utente di inserire una parola
const parolaUtente = prompt("inserisci una parola");
console.log(parolaUtente);
//salvare la parola in una variabile
const splitParola = parolaUtente.split("");
console.log(splitParola);
//invertire la parola con una (funzione) e salvare in una variabile
const parolaReverse = splitParola.reverse();
console.log(parolaReverse);
//confrontare parola inserita con parola invertita
const parolaUtenteReverse = parolaReverse.join("");
console.log(parolaUtenteReverse);;
//se parola inserita e parola invertita sono uguali ->
//    -> apro allert è un palindromo
//    -> altrimenti non è un palindromo
if (parolaUtente === parolaUtenteReverse) {
    alert("La parola inserita è un palindromo");
} else {
    alert("La parola inserita non è un palindromo");
}

