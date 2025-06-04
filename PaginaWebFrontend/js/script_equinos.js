document.addEventListener("DOMContentLoaded", function () {
    fetch("http://127.0.0.1:8000/api/equinos/")  // Cambiar si lo subes a hosting
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("equinosContainer");
            data.equinos.forEach(eq => {
                const card = document.createElement("div");
                card.classList.add("equino-card");

                card.innerHTML = `
                    <img src="${eq.foto}" alt="${eq.nombre}">
                    <h3>${eq.nombre}</h3>
                    <p>${eq.raza}</p>
                    <button onclick='showModal(${JSON.stringify(eq)})'>Ver más</button>
                `;

                container.appendChild(card);
            });
        });
});

function showModal(eq) {
    document.getElementById("equinoName").textContent = eq.nombre;
    document.getElementById("equinoRaza").textContent = eq.raza;
    document.getElementById("equinoEdad").textContent = eq.edad;
    document.getElementById("equinoCriadero").textContent = "Criadero Villa Rosa";  // fijo
    document.getElementById("equinoGenero").textContent = "No especificado";        // fijo
    document.getElementById("equinoTipo").textContent = eq.descripcion || "Sin descripción";

    const mensaje = `Hola, estoy interesado en el equino ${eq.nombre} que vi en la página.`;
    const numero = "573001234567";  // ← Cambia este número
    const whatsappLink = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    document.getElementById("whatsappLink").href = whatsappLink;

    document.getElementById("equinoModal").style.display = "block";
}

function closeModal() {
    document.getElementById("equinoModal").style.display = "none";
}
