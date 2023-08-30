/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/


//definisco le variabili
const firstNumber = Number(prompt('Type first number'));
const secondNumber = Number(prompt('Type second number'));
const numberEl = document.querySelector('.number');

/*
//controllo se il primo numero è piu grande e viceversa
if (firstNumber > secondNumber) {
    numberEl.innerHTML = firstNumber
} else if (secondNumber > firstNumber || secondNumber === firstNumber) {
    numberEl.innerHTML = secondNumber
}*/


let isNaNcheck = false;

while (isNaNcheck === false) {

    if (firstNumber > secondNumber) {

        numberEl.innerHTML = `${firstNumber} numero piu grande`

    } else if (secondNumber > firstNumber) {

        numberEl.innerHTML = `${secondNumber} numero piu grande`

    } else if (isNaNcheck === false) {

        numberEl.innerHTML = `${firstNumber} e ${secondNumber} sono uguali`

    }

    isNaNcheck = true
}