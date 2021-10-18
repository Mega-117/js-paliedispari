const bntPari = document.getElementById("btn-pari");
console.log(bntPari);
const bntDispari = document.getElementById("btn-dispari");
console.log(bntDispari);

function controlloPariDispari(numero1, numero2) {
    let somma = numero1 + numero2;
    if (somma % 2 === 0) {
        console.log("hai vinto");

        let dispari = alert("Hai scelto " + numero1 + " il Pc ha scelto " + numero2 + " La somma è " + somma + " Hai vinto");
        return dispari;
    } else {
        console.log("hai perso");
        let pari = alert("Hai scelto " + numero1 + " il Pc ha scelto " + numero2 + " La somma è " + somma + " Hai Perso");
        return pari;
    }
}

bntPari.addEventListener("click", function () {

    const numeroUtente = parseInt(prompt("insetisci un numero tra 1 e 5"));
    console.log("numero utente " + numeroUtente);
    const numeroPc = parseInt(Math.ceil(Math.random() * 5));
    console.log("numero pc " + numeroPc);

    let sommaNumeri = controlloPariDispari(numeroUtente, numeroPc);
});;

bntDispari.addEventListener("click", function () {
    numeroUtente = parseInt(prompt("insetisci un numero tra 1 e 5"));
    console.log("numero utente " + numeroUtente);

    numeroPc = parseInt(Math.ceil(Math.random() * 5));
    console.log("numero pc " + numeroPc);

    numeroFinale = controlloPariDispari(numeroUtente, numeroPc);
});



