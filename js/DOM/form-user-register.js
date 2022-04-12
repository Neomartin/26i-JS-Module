// Tomar el elemento formulario
const userRegisterForm = document.getElementById('user-register')
const formEl = userRegisterForm.elements;
const errorMSG = document.getElementById('form-error');
const usersList = document.querySelector('#users-list')
// Tomar elemento input uno por uno
const fullname = document.getElementById('fullname');
const username = document.querySelector('#username')
const email = document.querySelectorAll('.email');

let users = JSON.parse(localStorage.getItem('users')) || [];

console.log(users)
renderUser();

function registrarUsuario(ev) {
    ev.preventDefault();
    const elemento = ev.target.elements;
    const email = elemento.email.value;
    
    const emailExist = users.some(usr => email === usr.email)

    if(emailExist) {
        showErrorMsg('El correo ya existe')
        return;
    }

    if(elemento.password.value !== elemento.password2.value) {
        showErrorMsg('Las contraseñas no coinciden')
        return;
    }

    if(elemento.age.valueAsNumber < 18) {
        showErrorMsg('Debe ser mayor de 18 años para registrarse', 5000)
        return;
    }

    
    console.log(ev)
    const user = {
        fullname: elemento.fullname.value,
        username: elemento.username.value,
        email: elemento.email.value,
        age: elemento.age.valueAsNumber,
        gen: elemento.gen.value,
        password: elemento.password.value,
        id: Date.now(),
        createdAt: new Date(),
        role: 'CLIENT',
        avatar: elemento.avatar.value
    }
    
    users.push(user)
    console.log(users);
    localStorage.setItem('users', JSON.stringify(users))
    renderUser()
}

function showErrorMsg(message, time = 2000){
    errorMSG.innerText = message;
    setTimeout(()=> {
        errorMSG.innerText = ''
    }, time)
}

function renderUser() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    usersList.innerHTML = ''
    users.forEach(user => {
        usersList.innerHTML += `<li> ${user.fullname} </li>`
    })
}

window.onload = () => console.log('Recargo')