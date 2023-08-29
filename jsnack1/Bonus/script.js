/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

//definisco variabile vuota
const listaDispari = []

//chiedo all utente di inserire 6 numeri
for (let i = 0; i < 6; i++) {
   
    const userN = (Number(prompt('inserisci un numero'))) 

    //controllo se il numero è pari
    if (userN % 2 == 0) {
       
    //se il numero è dispari lo inserisco nell array    
    } else {
        listaDispari.push(userN);
    }

}

console.log(listaDispari);