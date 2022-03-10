const paisesGandoresDeMundiales = [
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

const inputBuscadorHTML = document.getElementById('buscadorPais');

function buscarPais(eventoDeJS) {
    const criterioDeBusqueda = eventoDeJS.target.value;

    const paisesFiltrados = paisesGandoresDeMundiales.filter(pais => {
        if(pais.name.toLowerCase() === criterioDeBusqueda.toLowerCase()) {
            return true
        }
        return false
    })

    console.log(paisesFiltrados)
}


// function saludar(nombre, sexo) {
//     let letra = 'a';
//     if(sexo === 'M') {
//         letra = 'o'
//     } 
//     console.log(`Bienvenid${letra} ${nombre} a nuestro sitio`)
// }


// function recorrerArray() {
//     paisesGandoresDeMundiales.forEach(function(pais) { 
//         console.log(pais)
//     })
// }

// function calcularPrecioEnPesos(dolar, valorDolarEnPesos) {
//     const precioPesos = dolar * valorDolarEnPesos
//     console.log(precioPesos)
//     return false
// }


// let  valorCalculado = calcularPrecioEnPesos(1000, 260);

// console.log(valorCalculado)