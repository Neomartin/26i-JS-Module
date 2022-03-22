// Treamos de una base de datos: Países de Latinoamérica
// const paisesLatam = [
//     'Argentina',
//     'Bolivia',
//     'Brasil',
//     'Chile',
//     'Colombia',
//     'Ecuador',
//     'Suriname',
//     'Uruguay',
//     'Venezuela',
// ];
// console.log(paisesLatam)
// console.log(paisesLatam.length)
// **** Forma 1
// for (let i = 0; i < paisesLatam.length; i++) {
//     const paisActual = paisesLatam[i];
//     console.log(`Pais actual ${i+1}:  ${paisActual}`);
// }
// **** Forma 2
// let i = 0;
// while(i < paisesLatam.length) {
//     const paisActual =  paisesLatam[i];
//     console.log('Pais actual ' + paisActual);
//     i++;
// }


// const paisesConMundial = [
//         'Francia',
//         'Alemania',
//         'España',
//         'Italia',
//         'Brasil',
//         'Francia',
//         'Brasil',
//         'Alemania',
//         'Argentina',
//         'Italia',
//         'Argentina',
//         'Alemania',
//         'Brasil',
//         'Inglaterra',
//         'Brasil',
//         'Brasil',
//         'Alemania',
//         'Uruguay',
//         'Italia',
//         'Italia',
//         'Uruguay',
// ];

// console.log(paisesConMundial);

// let brasilCampeon = 0;
// let argentinaCampeon = 0;
// let franciaCampeon = 0;
// let alemaniaCampeon = 0;
// for (let i = 0; i < paisesConMundial.length; i++) {
//     if (paisesConMundial[i] === 'Argentina') {
//         argentinaCampeon = argentinaCampeon + 1;
//     } else if (paisesConMundial[i] === 'Brasil') {
//         brasilCampeon = brasilCampeon + 1;
//     } else if (paisesConMundial[i] === 'Alemania') {
//         alemaniaCampeon = alemaniaCampeon + 1;
//     } else if (paisesConMundial[i] === 'Francia') {
//         franciaCampeon = franciaCampeon + 1;
//     }
//     // switch (paisesConMundial[i]) {
//     //     case 'Argentina':
//     //         argentinaCampeon = argentinaCampeon + 1;
//     //         break;
//     //     case 'Brasil':
//     //         brasilCampeon = brasilCampeon + 1;
//     //         break;
//     //     case 'Alemania':
//     //         alemaniaCampeon = alemaniaCampeon + 1;
//     //         break;
//     //     case 'Francia':
//     //         franciaCampeon = franciaCampeon + 1;
//     //         break;
//     // }
// }
// console.log('Brasil ganó el mundial: ' + brasilCampeon + ' veces.');
// console.log('Argentina ganó el mundial: ' + argentinaCampeon + ' veces.');
// console.log('Alemania ganó el mundial: ' + alemaniaCampeon + ' veces.');
// console.log('Francia ganó el mundial: ' + franciaCampeon + ' veces.');


//recorrer el listado
// con el condicional preguntan si el pais es 
// brasil, argentina, alemania, francia 

// console.log('Brasil gano el mundial ' + brasilCampeonDelMundo)


const paisesMundialObject = [
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
]

// for(let value of temp2) {
//     console.log(value.year)
// }