/*Snack 3:
        Il software deve chiedere per 10 volte all’utente di inserire un numero.
        Il programma stampa la somma di tutti i numeri inseriti.*/



//definisco le variabili
const bodyElement = document.querySelector('body');
const resultElement = document.createElement('div');
let somma = 0;

//chiedo all utente di inserire dieci numeri
for (let i = 0; i < 10; i++) {
    const input = Number(prompt(`Inserisci il numero ${i+1}`));
    somma += input;
}

console.log(somma);

//Inserisco gli elementi nella DOM
bodyElement.append(resultElement);

if (!isNaN(somma)) {
    resultElement.append("La somma di tutti i numeri è: " + somma);
} else {
    resultElement.append("Dati non inseriti correttamente!");
}