
// number -  NaN
// parseInt(algo)
// const age = parseInt(prompt('Ingrese su edad'));
// console.log(age);
// const normalPrice = 1000
// let finalPrice;
//    > =
// if( age >= 18 ) {
//     // Codigo que voy a ejecutar si la edad es mayor o igual que 18 = true 
//     console.info('Usted es mayor de edad, puede ingresar');
// } else if(age >= 12) {
//     console.warn('Para poder ingresar debe tener autorización de su mayor a cargo')
// } else {
//     console.error('No tiene edad permitida para ingresar');
// }


// Persona ingrese su edad y que basado en ella pueda obtener el precio final que abonara con su entrada al cine
// valor de entrada al cine es de $1000
// Personas mayor de 55 años tiene un descuento %40
// Personas entre 18 y 55 (54) no tienen descuento
// Personas entre 10 y 18 adolescentes tienen un 20% descuento
// Peronas menores abonan $250 unicamente

const valorEntradaCine = 1000;
const valorEntradaJubilado = valorEntradaCine * 0.6;
const valorEntradaAdolescente = valorEntradaCine * 0.8;
const valorDescuento = valorEntradaCine * 0.5;
const valorEntradaNiños = 250;
let costoTotalDeEntradas = 0;
const cantidadDePersonas = prompt("Ingrese la cantidad de miembros de la familia");
let iteracion = 1;
let edad = 50;
let edad = 60;
// Búcle while
while(iteracion <= cantidadDePersonas) {
    //Código que quiero repetir X cantidad de veces
    const edad = prompt("Edad de la persona que ingresa al cine");
                  
    if(edad > 55) {
        console.info("El valor de la entrada es $ " + valorDescuento);
        costoTotalDeEntradas = costoTotalDeEntradas + valorDescuento;
    } else if(edad >= 18) {
        console.info("El valor de la entrada es $ " + valorEntradaCine);
        costoTotalDeEntradas = costoTotalDeEntradas + valorEntradaCine; //1000
    } else if(edad >= 10) {
        console.info("El valor de la entrada es $ " + valorEntradaAdolescente);
        costoTotalDeEntradas = costoTotalDeEntradas + valorEntradaAdolescente;
    } else { 
        console.info("El valor de la entrada es $ " + valorEntradaNiños);
        costoTotalDeEntradas = costoTotalDeEntradas + valorEntradaNiños;
    }
    // Esa variable que controla las iteraciones de mi búcle debe si o si incrementarse o decrementarse de tal modo que el búcle en algún momento finalice
    iteracion = iteracion + 1;

}

console.log(edad)
console.log(`El valor total a abonar es de ${costoTotalDeEntradas} de contado`)



// let iteracion = 1;

//     // 1: true
//     // 2: true
//     // 3: true
//     // 4: true
//     // 5: false
//     // 6: false
// do {

//     console.log(`Este es el ciclo número: ${iteracion}`);
//     iteracion = iteracion + 1;
//     // iteracion++;

// } while(iteracion < 5)

// console.log('Termino el bucle')

