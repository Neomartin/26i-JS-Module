
// let dni = null
const dniLetterArray = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H','L', 'C', 'K', 'E']
const dniHTML = document.getElementById('dni');

const dniLetterHTML = document.querySelector('#dni-letter')


const errorMessageHTML = document.querySelector('#error-message')

console.log(dniLetterHTML)
function calcularLetraDNI() {
  const DNI = +dniHTML.value;
  if(DNI > 99999999 || DNI <= 0) {
    errorMessageHTML.innerText = 'El valor debe ser mayor que 0 y menor o igual que 99999999';
    errorMessageHTML.classList.add('visible', 'error-message')
    hiddeElement();
    dniHTML.value = null;
    dniHTML.focus();
    return
  };

  const rest = DNI % 23;
  console.log(dniLetterArray[rest])
  
  
  errorMessageHTML.classList.add('visible', 'success-message')
  errorMessageHTML.innerText = `La letra encontrada es ${dniLetterArray[rest]}`;
  dniLetterHTML.innerHTML = dniLetterArray[rest]
  hiddeElement();
}



function hiddeElement() {
  let i = 0;
    setInterval(() => {
        //   errorMessageHTML.innerText = null
            errorMessageHTML.classList.remove('visible', 'error-message', 'success-message');
            console.log("Interval", i++)
    }, 2000)     
}

function cargarFormulario(e) {
  e.preventDefault()
  // console.log(e)
  // const formElements = e.target.elements;
  // console.log(formElements.dni.valueAsNumber);

  const DNI = +dniHTML.value;
  const rest = DNI % 23;
  console.log(dniLetterArray[rest])
  dniLetterHTML.innerText = dniLetterArray[rest]
}
// do {
//   dni = parseInt(prompt("Ingrese DNI de la persona para calcular letra"))
// }while(isNaN(dni) || dni > 99999999 || dni <= 0);

// const rest = dni % 23;
// console.log('rest:', rest)
// console.log(dniLetterArray[rest])




