/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/


//definisco le variabili
const firstNumber = Number(prompt('Type first number'));
const secondNumber = Number(prompt('Type second number'));
const numberEl = document.querySelector('.number');


//controllo se il primo numero è piu grande e viceversa
if (firstNumber > secondNumber) {
    numberEl.innerHTML = firstNumber
} else if (secondNumber > firstNumber || secondNumber === firstNumber) {
    numberEl.innerHTML = secondNumber
}
