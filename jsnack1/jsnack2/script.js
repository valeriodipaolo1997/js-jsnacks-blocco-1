/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/


//definisco le variabili
/*const firstWord = prompt('Type first word');

const secondWord = prompt('Type second word');

const lengthFirstWord = firstWord.length;
const lengthSecondWord = secondWord.length;

console.log(lengthFirstWord, lengthSecondWord);

const wordElement = document.querySelector('.words');

//controllo se la prima parola è piu lunga della seconda e viceversa e stampo in pagina prima quella piu corta
if (lengthFirstWord > lengthSecondWord) {

    wordElement.insertAdjacentHTML('beforeend', `${secondWord}  `);
    wordElement.insertAdjacentHTML('beforeend', `${firstWord}  `);

} else if (lengthSecondWord > lengthFirstWord) {

    wordElement.insertAdjacentHTML('beforeend', `${firstWord}  `);
    wordElement.insertAdjacentHTML('beforeend', `${secondWord}  `);

}
*/



let i = 0;
let listwords = []

while (i < 2) {
    const word = prompt("type a word");
    listwords.push(word)
    i++
}

if (listwords[0] > listwords[1]) {
    console.log(listwords[1], listwords[0]);
} else if (listwords[0] < listwords[1]) {
    console.log(listwords[0], listwords[1]);
} else {
    console.log(listwords[0], listwords[1]);
}