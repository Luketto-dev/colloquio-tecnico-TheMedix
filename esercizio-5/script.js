//nel seguente codice perchè anche il name del primo oggetto all interno della array users cambia il nome in 'Mario'?

/*
RISPOSTA:
- PERCHE L'OGGETTO È ARCHIVIATO DA QUALCHE PARTE NELLA MEMORIA MENTRE LA VARIABILE CONTIENE IL RIFERIMENTO AD ESSO,
QUINDI QUANDO UNA "VARIABILE OGGETTO" VIENE COPIATA, IN REALTÀ VIENE COPIATO IL RIFERIMENTO MA L'OGGETTO IN SE NON VIENE DUPLICATO,
IN QUESTO CASO L'OGGETTO È UNO SOLO MA CON DUE VARIABILI CHE SI RIFERISCONO AD ESSO, POSSIAMO USARE ENTRAMBE LE VARIABILI PER ACCEDERE ALL'OGGETTO E MODIFICARNE IL CONTENUTO
*/
let users = [
    {
        name: 'Albert',
        surname: 'Williams',
        age: 28
    },
    {
        name: 'Max',
        surname: 'Smith',
        age: 35
    },
    {
        name: 'Angel',
        surname: 'Freed',
        age: 23
    },
    {
        name: 'Luiss',
        surname: 'Red',
        age: 33
    }
]


let user1 = users[0]
user1.name = 'mario'


console.log(user1)
console.log(users[0])

