//chiedere al utente di inserire una parola
const parolaUtente = prompt("inserisci una parola");
console.log(parolaUtente);


function controlloPalindromi(parola) {
    //invertire la parola con una (funzione) e salvare in una variabile
    const splitParola = parola.split("");
    const parolaReverse = splitParola.reverse();
    const parolaUtenteReverse = parolaReverse.join("");
    //confrontare parola inserita con parola invertita
    if (parolaUtente === parolaUtenteReverse) {
        const palindromo = alert("La parola inserita è un palindromo");
        return palindromo;
    } else {
        const noPalindromo = alert("La parola inserita non è un palindromo");
        return noPalindromo;
    }
}
parolaDaControllare = controlloPalindromi(parolaUtente);