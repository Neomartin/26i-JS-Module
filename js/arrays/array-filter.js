const paisesGandoresDeMundiales = [{
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
        name: 'Guatemala',
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
{
    /* <li><span class="pais">País:</span>Algun pais  <span>Año:</span>0001</li> */ }
///////////

// @param Array de paise
function listarPaises(arrayAPintar) {

    listaDePaisesHTML.innerHTML = '';

    arrayAPintar.forEach(function (country) {
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


const arrayFindMethod = function () {

    const findedCountry = paisesGandoresDeMundiales.find((paisGanador) => {
        if (paisGanador.name === 'Brasil') {
            return true
        };
    });
    console.log('findedCountry', findedCountry)
}

arrayFindMethod()

const arrayFindIndex = function () {

    const findedIndex = paisesGandoresDeMundiales.findIndex((paisGanador) => {
        if (paisGanador.name === 'Francia') {
            return true
        };
    });
    console.log('findedIndex', findedIndex);
    paisesGandoresDeMundiales.splice(findedIndex, 1);
}

// arrayFindIndex();
console.log(paisesGandoresDeMundiales)

function arrayReduceMethod() {
    /**
     Guardo el valor acumulado por reduce                 
     * @param valorAcumulado: es el valor que retorno en cada iteración con reduce
     * @param ValorActualPaís: elemento (del array) que estoy iterando en cada vuelta. 
     */
    const totalAcumulado = paisesGandoresDeMundiales.reduce((valorAcumulado, valorActualPais) => {

        let sumatoriaAñosPaises = valorAcumulado;
        if (valorActualPais.name === 'Argentina') {
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
const products = [{
        _id: "6222946ac5bf78b8417b3391",
        name: "Shampoo Tio Nacho",
        price: 1350,
        stock: true,
        category_id: "GENERAL",
        iva: "21",
        createdAt: "2022-03-04T22:36:26.654Z",
        quantity: 2
    },
    {
        _id: "622294f41b34c843c786edb3",
        name: "Shampoo Pantene",
        description: "",
        price: 640,
        stock: true,
        category_id: "GENERAL",
        cod: "0001",
        iva: "21",
        createdAt: "2022-03-04T22:38:44.978Z",
        quantity: 3
    },
    {
        _id: "621d131baaebd8905d22aa13",
        name: "Papel Higienico",
        description: "Papel de 50 metros de largo",
        price: 120,
        stock: true,
        category_id: "PERFUMERIA",
        cod: "1",
        iva: "21",
        quantity: 5,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "621ff32d89438db87d035240",
        name: "Fideos Spagetti",
        description: "",
        price: 160,
        stock: true,
        category_id: "PERFUMERIA",
        cod: "0001",
        iva: "21",
        quantity: 2,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "621ff2d87fb9f142a6a99c0c",
        name: "Desodorante Rexona",
        price: 250,
        stock: true,
        category_id: "GENERAL",
        iva: "21",
        quantity: 7,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "621ff2f989438db87d03523e",
        name: "Desodorante Old Space",
        description: "",
        price: 240,
        stock: true,
        category_id: "PERFUMERIA",
        cod: "0001",
        iva: "21",
        quantity: 1,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "621ffd393bce13940e00437a",
        name: "Desodorante Genérico GOLD PRO",
        price: 150,
        stock: true,
        category_id: "GENERAL",
        iva: "21",
        quantity: 10,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "621ffcff3bce13940e004370",
        name: "Desodorante Genérico",
        price: 1650,
        stock: true,
        category_id: "GENERAL",
        iva: "21",
        quantity: 3,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "621ff2e37fb9f142a6a99c0e",
        name: "Desodorante Dove",
        price: 410,
        stock: true,
        category_id: "GENERAL",
        iva: "21",
        quantity: 5,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "621ff2d07fb9f142a6a99c0a",
        name: "Desodorante Axe",
        price: 580,
        stock: true,
        category_id: "GENERAL",
        iva: "21",
        quantity: 5,
        createdAt: "2022-03-15T23:36:53.278Z"
    },
    {
        _id: "62210360cc0513245f5e657c",
        name: "Arroz",
        description: "",
        price: 200,
        stock: true,
        category_id: "GENERAL",
        cod: "0001",
        iva: "21",
        createdAt: "2022-03-03T18:05:20.193Z",
        quantity: 4
    }
]

// Obtengan el valor final de la compra:
// Iterar todos los productos que el cliente lleva
// De alguna forma acumuar ese valor que va a estar dado por precio * la cantidad
// Calcular el valor total a abonar sumando el iva (21) al subtotal de la compra.

//2 CONSIGNA
// Al calcular el valor total, deben tener en cuenta el iva.
// CONDICIÓN para los articulos de categoría 
//  --- "GENERAL" apliquen un iva del 21% y los artículos de categoría 
//  --- "PERFUMERIA" se le va agregar un valor de iva del 10.5%

function orderPriceCalculate() {
    const total = products.reduce((acc, product) => {
        let subtotal = acc;
        // Operador ternario igual a if/else
        // Pregunto si se cumple product.category_id === 'GENERAL'
        // Si es verdaderp ejecuto lo que se encuentra siguiente al signo de pregunta, si es falso lo que esta a la derecha de los 2puntos:
        const iva = product.category_id === 'GENERAL' ? 1.21 : 1.105;
        subtotal += product.price * product.quantity * iva;
        // Retorno el nuevo valor del acumulador
        return subtotal;
    }, 0);
    return total;
}

console.log(orderPriceCalculate());
const frutas = [
    "Aceituna",
    "Melón",
    "anana",
    "bananas",
    "frutilla",
    "Melón",
    "guindas",
    "manzanas",
    "naranja"
];              
                
const numeros = [6,1,67,8,10, -5, -3, -100, 75,14,1000010]
frutas.sort((a, b) => {   
    if(a.toLowerCase() > b.toLowerCase()){
        return 1
    }           
    if(a.toLowerCase() < b.toLowerCase()) {
        return -1
    }
    return 0
    // ***Opción 2
    return a.localeCompare(b)

})

paisesGandoresDeMundiales.push({name: 'francia', year: 2030})
// Ordenar el array de paises pero por nombre a-z

console.log(paisesGandoresDeMundiales)
// filtren aquellos paises cuyo año de victoria sea multiplo de 6
let multiplosDe6Filtrados = paisesGandoresDeMundiales.filter(pais => {
    console.log(pais.year % 6)
    if(pais.year % 6 === 0){
        return true
    }
    return false
})


let multiplosForEach = [];
paisesGandoresDeMundiales.forEach(pais => {
    if(pais.year % 6 === 0) {
        multiplosForEach.push(pais)
    }
})


let shorterVersion = paisesGandoresDeMundiales.filter(pais => !(pais.year % 6)).sort((a,b) => a.name.localeCompare(b.name))


console.log('multiplosDe6Filtrados', multiplosDe6Filtrados)
console.log('multiplosForEach', multiplosForEach)
console.log('shorterVersion', shorterVersion)