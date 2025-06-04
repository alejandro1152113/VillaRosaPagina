document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Datos de prueba (usuario y contraseña predefinidos)
        const validUser = "admin";
        const validPass = "1234";

        if (username === validUser && password === validPass) {
            localStorage.setItem("loggedIn", true);
            window.location.href = "recibo.html"; // Redirigir al formulario de recibo
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
});
