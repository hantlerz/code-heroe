document.addEventListener('DOMContentLoaded', function () {
    const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    const loginButton = document.getElementById('loginButton');
    const openLoginModal = document.getElementById('openLoginModal');
    const loginForm = document.getElementById('loginForm');

    openLoginModal.addEventListener('click', () => {
        loginModal.show();
    });

    loginButton.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificar las credenciales (simulado)
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('role', 'admin');
            window.location.href = 'admin.html';
        } else if (username === 'usuario' && password === 'usuario123') {
            localStorage.setItem('role', 'usuario');
            window.location.href = 'usuario.html';
        } else {
            Swal.fire('Error', 'Credenciales incorrectas', 'error');
        }
    });
});
