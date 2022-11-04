//Scrivere una funzione che in input accetti un parametro y (numero) e restituisca la somma da 1 ad y.


function sumFrom1ToY(y){
    let somma = 0
    if (isNaN(y)) {
        return "inserisci un numero valido"
    }
    else{ 
    for (let i = 1; i <= y; i++) {
        
            somma += i
        
        }
    }
    

    return somma
    
}

console.log(sumFrom1ToY(5))
console.log(sumFrom1ToY(10))
console.log(sumFrom1ToY(15))

