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



function usersName(){
    let names = []
    for (let i = 0; i < users.length; i++) {
        const user = users[i]
        names.push(user.name)
        
    }

    return names
}



console.log(usersName())


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



