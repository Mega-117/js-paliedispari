const bntPari = document.getElementById("btn-pari");
console.log(bntPari);
const bntDispari = document.getElementById("btn-dispari");
console.log(bntDispari);

function controlloPariDispari(numero1,) {

    let numeroPc = parseInt(Math.ceil(Math.random() * 5));
    console.log("numero pc " + numeroPc);

    let somma = numero1 + numeroPc;
    console.log(somma);
    if (somma % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function gioco(scelta) {
    const numeroUtente = parseInt(prompt("insetisci un numero tra 1 e 5"));
    console.log("numero utente " + numeroUtente);
    let controlloNumero = controlloPariDispari(numeroUtente);
    //se il btn è pari e la somma finale è pari ho vinto

    if (scelta === "pari" && controlloNumero) {
        alert("il bottone premuto è pari la somma è pari hai vinto");
    }
    //se il btn è dispari e la somma è dispari ho vinto
    else if (scelta === "dispari" && !controlloNumero) {
        alert("hai vinto perche dispari");
    }
    //altrimenti ho perso
    else {
        alert("hai perso");
    }
}

bntPari.addEventListener("click", function () {

    gioco("pari");
});

bntDispari.addEventListener("click", function () {
    gioco("dispari");
});
