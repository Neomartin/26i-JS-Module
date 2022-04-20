// function checkIsAuth() {
const signinHTML = document.querySelector('#signin');
user = JSON.parse(localStorage.getItem('currentUser'))
console.log(user)
if (!user) {
    redirectToLogin()
}

signinHTML.innerHTML = `<button class='btn btn-warning' onclick='logout()'>Logout</button>`


function logout() {
    localStorage.removeItem('currentUser');
    redirectToLogin()
}

function redirectToLogin() {
    window.location.href = '/pages/login/login.html'
}