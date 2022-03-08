const paisesMundialObjects = [
    {
        name: 'Francia',
        year: 2018
    },
    {
        name: 'Alemania',
        year: 2014
    },
    {
        name: 'España',
        year: 2010
    },
    {
        name: 'Italia',
        year: 2006
    },
    {
        name: 'Brasil',
        year: 2002
    },
    {
        name: 'Francia',
        year: 1998
    },
    {
        name: 'Brasil',
        year: 1994
    },
    {
        name: 'Alemania',
        year: 1990
    },
    {
        name: 'Argentina',
        year: 1986
    },
    {
        name: 'Italia',
        year: 1982
    },
    {
        name: 'Argentina',
        year: 1978
    },
    {
        name: 'Alemania',
        year: 1974
    },
    {
        name: 'Brasil',
        year: 1970
    },
    {
        name: 'Inglaterra',
        year: 1966
    },
    {
        name: 'Brasil',
        year: 1962
    },
    {
        name: 'Brasil',
        year: 1958
    },
    {
        name: 'Alemania',
        year: 1954
    },
    {
        name: 'Uruguay',
        year: 1950
    },
    {
        name: 'Italia',
        year: 1938
    },
    {
        name: 'Italia',
        year: 1934
    },
    {
        name: 'Uruguay',
        year: 1930
    },
    {
        name: 'Inglaterra',
        year: 1966
    },
    {
        name: 'Brasil',
        year: 1962
    },
    {
        name: 'Brasil',
        year: 1958
    },
    {
        name: 'Alemania',
        year: 1954
    },
    {
        name: 'Uruguay',
        year: 1950
    },
    {
        name: 'Italia',
        year: 1938
    },
    {
        name: 'Italia',
        year: 1934
    },
    {
        name: 'Uruguay',
        year: 1930
    },
];
console.log('ANTES DE EJECUTAR MODIFICACIONEs',paisesMundialObjects) 

// let paisesMundialBRASIL = paisesMundialObjects.map((pais)=> {
//     return pais;
// })
// const brasil = [];
const resto = [];
const restoFilterMethod = paisesMundialObjects.filter(seleccion =>{ 
    if(seleccion.name !== 'Brasil') {
        return true 
    }
    return false
});

console.log(restoFilterMethod)
// paisesMundialObjects.forEach(paisGanador => {
//     if(paisGanador.name !== 'Brasil') {
//         resto.push(paisGanador)
//     } 
// })
console.log(resto)



// paisesMundialObjects.forEach((pais)=> {

//     if(pais.name === 'Brasil') {
//         paisesMundialBRASIL.push(pais)
//     }

// })

// console.log('paisesMundialBRASIL',paisesMundialBRASIL)
// console.log('Array original',paisesMundialObjects)











// console.log(paisesMundialObjects)
// let brasilCampeonatosGanados = [];
// paisesMundialObjects.forEach((paisGanador, indice) => {
//         // console.log(paisGanador)
//         //Preguntar si el país que estamos analizando es Brasil
//         //Si el país fue Brasil vamos a insertar el año dentro del array brasilCampeonatos
//         if(paisGanador.name === 'Brasil') {
//             brasilCampeonatosGanados.push(paisGanador.year)
//             console.log(paisGanador.name, indice)
//             paisesMundialObjects.splice(indice, 1)
//         }
//         document.write(`<div class="card">El país que ganó el mundial del año 
//                             <span> ${paisGanador.year} </span> fue ${paisGanador.name}</div>`)
// });

// let paisesMayuscula = paisesMundialObjects.map(element => {
//     // console.log(paisGanador)
//     return element.name.toUpperCase();
// })

// console.log(paisesMundialObjects)
// console.log(paisesMayuscula)


