// Tomar el elemento formulario
const userRegisterForm = document.getElementById('user-register')
const formEl = userRegisterForm.elements;
// Tomar elemento input uno por uno
const fullname = document.getElementById('fullname');
const username = document.querySelector('#username')
const email = document.querySelectorAll('.email');

console.log('Principio ', formEl.username.value)

function registrarUsuario(ev) {
    ev.preventDefault();
    console.log(ev)
    //Armar objeto n base al formulario
    // let user = {
    //     name: formEl.name,
    //     username: 
    // }
    // chekear que las contraseñas coincida
    //logueamos sino hacemo un console warn
}

window.onload = () => console.log('Recargo')