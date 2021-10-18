const bntPari = document.getElementById("btn-pari");
console.log(bntPari);
const bntDispari = document.getElementById("btn-dispari");
console.log(bntDispari);

function controlloPariDispari(numero1) {

    let numeroPc = parseInt(Math.ceil(Math.random() * 5));
    console.log("numero pc " + numeroPc);

    let somma = numero1 + numeroPc;
    const sommaNumeri = somma;
    console.log(sommaNumeri);
    if (somma % 2 === 0) {
        somma = "pari";
        return somma;

    } else {
        somma = "dispari";
        return somma;

    }
}

bntPari.addEventListener("click", function () {
    const numeroUtente = parseInt(prompt("insetisci un numero tra 1 e 5"));
    console.log("numero utente " + numeroUtente);

    let controlloNumero = controlloPariDispari(numeroUtente);

    console.log(controlloNumero);
    if (controlloNumero === "pari") {
        alert("hai vinto");
        console.log(controlloNumero);
    } else {
        console.log(controlloNumero);
        alert("hai perso");
    }

});

bntDispari.addEventListener("click", function () {
    const numeroUtente = parseInt(prompt("insetisci un numero tra 1 e 5"));
    console.log("numero utente " + numeroUtente);

    let controlloNumero = controlloPariDispari(numeroUtente);

    console.log(controlloNumero);
    if (controlloNumero === "dispari") {
        alert("hai vinto");
        console.log(controlloNumero);
    } else {
        console.log(controlloNumero);
        alert("hai perso");
    }

});
