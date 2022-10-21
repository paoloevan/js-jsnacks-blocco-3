/*
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array
in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

const myArray = [
    'pippo',
    'PLUTO',
    'Paperino'
]

myArray.forEach(myString => {
    console.log(myString);
    //trasformo stringa in array
    let singleArray = myString.split('')
    console.log(singleArray);
    //ciclo dentro la nuova array
    let myNewArray = singleArray.map(caracter => {
        
    });
    //verifico se il carattere è maiuscolo


})


