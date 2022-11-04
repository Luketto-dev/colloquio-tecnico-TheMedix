// dato il seguente array ritornare:
// - un array con solo i nomi dei soggetti
// - età media dei soggetti

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


//funzione che mi ritorna un array con solo i nomi dei soggetti
function usersName(){
    //inizializzo array vuoto
    let names = []
    //ciclo sull array originale
    for (let i = 0; i < users.length; i++) {
        // salvo i singoli utenti in una variabile
        const user = users[i]
        // pusho il nome dei singoli utenti all interno del nuovo array
        names.push(user.name)
        
    }

    //ritorno il nuovo array
    return names
}



console.log(usersName())

// funzione che mi torna la media delle età di tutti gli utenti
function usersAvaregeYears(){
    
    let years = []
    let sumYears= 0
    let avaregeYears = 0
    for (let i = 0; i < users.length; i++) {
        const user = users[i]
        years.push(user.age)
        
    }
    for (let c = 0; c < years.length; c++) {
        const year = years[c]
        sumYears += year
        
    }
    
    avaregeYears = sumYears/ years.length

    return avaregeYears
    

    
}

console.log(usersAvaregeYears())



