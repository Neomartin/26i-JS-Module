console.log('Condicionales switch');
let signo = prompt('Ingrese su signo del Zodíaco');
signo = signo.toLowerCase();

switch(signo) {
    case 'aries':
        console.log(`Su fecha de nacimiento es en Abril`);
        break;
    case 'tauro':
        console.log(`Su fecha de nacimiento es en Mayo`);
        break;
    default:
        console.log('Signo incorrecto');
}