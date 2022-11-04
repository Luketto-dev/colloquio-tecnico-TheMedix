//Scrivere una funzione che in input accetti un parametro y (numero) e restituisca la somma da 1 ad y.


function sumFrom1ToY(y){
    // inizalizzo la variabile somma a 0
    let somma = 0
    // nel caso venga inserita qualsiasi cosa che non sia un numero 
    if (isNaN(y)) {
        return "inserisci un numero valido"
    }
    else{ 
        // ciclo su y
    for (let i = 1; i <= y; i++) {
        
            // addiziono a somma l indice i
            somma += i
        
        }
    }
    
    //ritorno la somma da 1 a y
    return somma
    
}

console.log(sumFrom1ToY(5))
console.log(sumFrom1ToY(10))
console.log(sumFrom1ToY(15))

