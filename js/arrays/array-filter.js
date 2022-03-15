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
        name: '',
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


const listaDePaisesHTML = document.getElementById('listado');
console.log(listaDePaisesHTML);

////////////
{/* <li><span class="pais">País:</span>Algun pais  <span>Año:</span>0001</li> */}
///////////

// @param Array de paise
function listarPaises(arrayAPintar){

    listaDePaisesHTML.innerHTML = '';

    arrayAPintar.forEach(function(country){
        // combinacion de += mantiene el valor anterior (izquierda) y le añade el valor de la derecha sumando ambos
        listaDePaisesHTML.innerHTML += `<li>
                                            <div class="row">
                                                <div class="col-3">
                                                    <span class="pais">Pais:</span>${country.name}
                                                </div>
                                                <div class="col-6">
                                                    <span>Año:</span>${country.year} 
                                                </div>
                                            </div>
                                        </li>`
    });
}

// Llamamos la función cuando se carga el script para pintar inicialmente todos los paises
listarPaises(paisesGandoresDeMundiales);


function buscarPais(eventoDeJS) {
    const criterioDeBusqueda = eventoDeJS.target.value.toLowerCase();
    //escribir un condicional que no empiece a buscar hasta que al menos se hayan colocado 3 o más
    
    // ***Opción 2
    // if(criterioDeBusqueda.length < 3) return;
    // ***Opción 1
    if (criterioDeBusqueda.length >= 2) {
        const paisesFiltrados = paisesGandoresDeMundiales.filter(pais => {
            
            const nombrePais = pais.name.toLowerCase();
            // El método includes() determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false
            return nombrePais.includes(criterioDeBusqueda)
        })

        console.log(paisesFiltrados);
        listarPaises(paisesFiltrados)
    } else {
        listarPaises(paisesGandoresDeMundiales)
    }

}


const arrayFindMethod = function(){

    const findedCountry = paisesGandoresDeMundiales.find((paisGanador) => {
        if(paisGanador.name === 'Brasil') {
            return true
        };
    });
    console.log('findedCountry', findedCountry)
}

arrayFindMethod()

const arrayFindIndex = function() {

    const findedIndex = paisesGandoresDeMundiales.findIndex((paisGanador) => {
        if(paisGanador.name === 'Francia') {
            return true
        };
    });
    console.log('findedIndex', findedIndex);
    paisesGandoresDeMundiales.splice(findedIndex, 1);
}

// arrayFindIndex();
console.log(paisesGandoresDeMundiales)

function arrayReduceMethod() {
    const totalAcumulado = paisesGandoresDeMundiales.reduce((valorAcumulado, valorActualPais) => {
        let sumatoriaAñosPaises = valorAcumulado;
        if(valorActualPais.name === 'Argentina') {
            sumatoriaAñosPaises += valorActualPais.year;
            // console.log(sumatoriaAñosPaises)
            return sumatoriaAñosPaises;
        }
        return sumatoriaAñosPaises
    }, 0)

    console.log(totalAcumulado)
}

arrayReduceMethod()


console.log(paisesGandoresDeMundiales.reverse())

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