// dato un array ritornare:
// - un array filtrato con le parole di lunghezza maggiore di 5.
// - un array con la prima lettere di ogni parola in maiuscolo.

const fruits = ['apple', 'orange', 'banana', 'pineapple', 'kiwi']

// funzione che mi ritorna un array filtrato con le parole di lunghezza maggiore di 5
function wordsGreater5Characters(){
    //inizializzo array filtrto a vuoti
    let FruitsGreater5Characters = []
    //ciclo sull array principale
    for (let i = 0; i < fruits.length; i++) {
        const fruit = fruits[i];

        // se il singolo elemento ha una lunghezza maggiore o uguale a 5
        if (fruit.length >= 5) {
            
            //pusho l elemento all interno dell array filtrato
            FruitsGreater5Characters.push(fruit)
        }
        
    }

    //ritorno l array filtrato
    return FruitsGreater5Characters
}


console.log(wordsGreater5Characters())

//funzione che mi torna un array con la prima lettere di ogni parola in maiuscolo.
function arrayWithFirstLetterToUpper(){

    //inizializzo array filtrto
    let fruitsWithFirstLetterToUpper = []
    // filtro sull array originale
    for (let i = 0; i < fruits.length; i++) {
        const element = fruits[i];

        // mi vado a prendere la prima lettera di ogni elemento all interno dell array originlae
        const firstLetterToUpper = element[0].toUpperCase()
        
        // pusho ogni singola lettera all interno del nuovo array
        fruitsWithFirstLetterToUpper.push(firstLetterToUpper)
        
    }

    //ritorno il nuovo array
    return fruitsWithFirstLetterToUpper
}

console.log(arrayWithFirstLetterToUpper())
