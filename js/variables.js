// console.log('Hello World')
// document.write('Contenido para insertar en mi HTML');
var nombre1 = "Jose Miguel Pérez del Valle Nacido";
var nombre2
const user = 'Jose Alberto User Doe';
let nombre4 = "Jose Constantine";

// Reasignamos el valor siempre y cuando la variable sea inicializada como var o let
nombre4 = "JOSE CONSTANTINE";

const saludo = "Bienvenid@ de nuevo " + nombre4;
console.log(saludo)


let numero = 24
const costoPrenda = 4500;
const iva = 1.21;
const recargoTarjeta = 1.35;


const allowedToAccess = true;

let valorPrenda = costoPrenda * iva;

valorPrenda = valorPrenda * recargoTarjeta; 

console.log("Valor de la prenda $" +  valorPrenda);

// ARRAYS
let paisesLationamerica = ["Argentina", "Brasil", "Bolivia", "Paraguay", "Peru", "Chile", "Colombia", "Uruguay"];


let usuarioAsArray = 
    [20, "Amado", true, "Jose", 1987, false, 1.20, "Argentina", "Tucuman", "Velez"]

console.log('El equipo de ' + usuarioAsArray[0] + ' es ' + usuarioAsArray[5])

//OBJETOS
let usuario = {
    name: "JoseObj",
    lastName: "Amado",
    age: 20,
    team: "Velez",
    isActive: true,
    bornDate: 1987,
    pets: ['Oreo', 'Kaiser'],
    isSuscribed: false,
    discount: 1.20,
    country: "Argentina",
    state: "Tucuman",
    adress: {
        street: 'Irene Curie',
        street_number: 123,
        city: 'San Rafael'
    }
}
console.log(usuario.pets);
console.log(usuario.adress.city)
console.log(usuario['adress']['city'])






// console.log("OBJETO: El equipo de " + usuario.name + " es " + usuario.team);

// let alumnosArray = [
//     ["Benitez", [10, 20], "FullStack"],
//     "Contreras"
// ]

// console.log(alumnosArray[0]);
// alumnosArray[0] = 10;
// console.log(alumnosArray);

let alumnos = [
    { fullName: "Argumedo Roberto", course: "FullStack", notas: [10, 20]  },
    { fullName: "Benitez Pablo", course: "FullStack", notas: []  },
    { fullName: "Contreras Sergio", course: "React Avanzado", notas: [10, 20]  },
];

const nuevoAlumno = { fullName: "Lorena Cobos", course: "Marketing", notas: []  };

console.log(alumnos)
alumnos.push(nuevoAlumno)
console.log(alumnos)
// alumnos[1].notas.push(15);

// // { fullName: "Benitez Pablo", course: "FullStack", notas: [10, 20]  }
// console.log(alumnos)

// console.log(listadoDeValoresMixtos.length);
// console.log(listadoDeValoresMixtos[4]);