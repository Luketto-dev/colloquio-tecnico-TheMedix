// dato un array ritornare:
// - un array filtrato con le parole di lunghezza maggiore di 5.
// - un array con la prima lettere di ogni parola in maiuscolo.

const fruits = ['apple', 'orange', 'banana', 'pineapple', 'kiwi']

function wordsGreater5Characters(){
    let FruitsGreater5Characters = []
    for (let i = 0; i < fruits.length; i++) {
        const fruit = fruits[i];

        if (fruit.length >= 5) {
            
            FruitsGreater5Characters.push(fruit)
        }
        
    }

    return FruitsGreater5Characters
}


console.log(wordsGreater5Characters())


function arrayWithFirstLetterToUpper(){

    let fruitsWithFirstLetterToUpper = []
    for (let i = 0; i < fruits.length; i++) {
        const element = fruits[i];

        const firstLetterToUpper = element[0].toUpperCase()
        
        fruitsWithFirstLetterToUpper.push(firstLetterToUpper)
        
    }

    return fruitsWithFirstLetterToUpper
}

console.log(arrayWithFirstLetterToUpper())
