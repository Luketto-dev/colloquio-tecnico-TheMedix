//Scrivere una funzione che in input accetti un parametro x e restituisca il tipo della variabile x.



var trueTypeOf = (x) => Object.prototype.toString.call(x).slice(8, -1).toLowerCase()

console.log(trueTypeOf([]))
console.log(trueTypeOf({}))
console.log(trueTypeOf(3))
console.log(trueTypeOf(true))
console.log(trueTypeOf('string'))
console.log(trueTypeOf(null))
console.log(trueTypeOf())
console.log(trueTypeOf(function() {}))



