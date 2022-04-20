// function checkIsAuth() {
    user = JSON.parse(localStorage.getItem('currentUser'))
 
    if(user.role !== 'ADMIN') {
        window.location.href = '/index.html'
    }


//     }
// }

// checkIsAuth();