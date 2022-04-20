// Tomar el elemento formulario
const userRegisterForm = document.getElementById('user-register')
const loginSection = document.getElementById('loginSection')
const logoutSection = document.getElementById('logout')
let user;

checkIsAuth();

function checkIsAuth() {
    user = JSON.parse(localStorage.getItem('currentUser'))
    if(user) {
        loginSection.classList.add('d-none');
        logoutSection.classList.remove('d-none');
        const welcomeHTML = document.querySelector('.welcome');
        welcomeHTML.textContent = `Bienvenido ${user.fullname}`
    } else {
        loginSection.classList.remove('d-none');
        logoutSection.classList.add('d-none')
    }
}

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

    if (emailExist) {
        showErrorMsg('El correo ya existe', errorMSG)
        return;
    }

    if (elemento.password.value !== elemento.password2.value) {
        showErrorMsg('Las contraseñas no coinciden', errorMSG)
        return;
    }

    if (elemento.age.valueAsNumber < 18) {
        showErrorMsg('Debe ser mayor de 18 años para registrarse', errorMSG, 5000)
        return;
    }

    if (elemento.avatar.value.includes('http') === false) {
        elemento.avatar.value = '/assets/image/users/default-avatar.png'
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

function showErrorMsg(message, element, time = 2000) {
    element.innerText = message;
    setTimeout(() => {
        element.innerText = ''
    }, time)
}

function renderUser() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    usersList.innerHTML = ''
    users.forEach(user => {
        let imageLink; 
        if(user.avatar.includes('http')) {
            imageLink = user.avatar
        } else {
            imageLink = '/assets/image/users/default-avatar.png'
        }
          
        usersList.innerHTML += `<li>
                <img class="avatar" src=${imageLink} loading="lazy"></div>
                <div class="data">
                    <div  class="name"> ${user.fullname}</div>
                    <div  class="user"> ${user.username}</div>
                    <div  class="email"> ${user.email}</div>
                </div>
                <div class="age">${user.age}</div>
                <div class="role">${user.role}</div>
                </li>`
    })
}


// Obtener referencia al formulario de login
const loginForm = document.getElementById('login');
const formLoginError = document.getElementById('formLoginError')
// Detectar cuando se dispara el evento Submit
// Obtener valores de email y password en el input
loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputEmail = loginForm.elements.email.value;
    const inputPassword = loginForm.elements.password.value;
    const user = users.find(usr => {
        return usr.email === inputEmail
    });
    console.log('user', user)

    if(!user || user.password !== inputPassword){
        showErrorMsg('Credenciales incorrectas', formLoginError)
        return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user))
    loginForm.reset()
    checkIsAuth();
    // window.location.href = '/index.html'
    setTimeout(()=> window.location.href = '/pages/login/login.html', 3000)
})

function logout() {
    localStorage.removeItem('currentUser');
    checkIsAuth();
    setTimeout(()=> window.location.href = '/pages/login/login.html', 3000)
    
}

/* Buscar si ese correo lo posee algun usuario de mi array, método recomendado find, findIndex
    - Si NO encuentro ningun usuario con ese correo le retorno un error RETURN 
    - Si encuentro un usuario con ese correo GUARDO en una variable todo ese usuario
   Checkeo si la constraña que colocó en el input coincide con la contraseña que tiene ese usuario que obtuve por su correo
    - No coincide: Devuelvo error indicando que los datos ingresados no son correctos
    - Si coincide lo dejo hacer login
        - Almacenar dicho en el localStorage como currentUser
        ~* Si el login es correcto lo vamos a redireccionar al HOME
*/

window.onload = () => console.log('Recargo')