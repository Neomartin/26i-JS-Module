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
const edad = prompt("Edad de la persona que ingresa al cine");
const valorEntradaJubilado = valorEntradaCine * 0.6;
const valorEntradaAdolescente = valorEntradaCine * 0.8;
const valorEntradaNiños = 250;

if(edad > 55) {
    console.info("El valor de la entrada es $" + valorEntradaCine)
} else if(edad >= 18) {
    console.info("El valor de la entrada es $" + valorEntradaCine);
} else if(edad >= 10) {
    console.info("El valor de la entrada es $" + valorEntradaAdolescente);
} else {
    console.info("El valor de la entrada es $" + valorEntradaNiños);
}


// if(edad >= 10 && edad < 18) {
//     console.info("El valor de la entrada es $" + valorEntradaAdolescente);
// } else if(edad >= 18) {
//     console.info("El valor de la entrada es $" + valorEntradaCine);
// } else if(edad > 55) {
//     console.info("El valor de la entrada es $" + valorEntradaJubilado);
// }
a

console.log("No sigue evaluando la condición");
            //true    y  true
            //     true