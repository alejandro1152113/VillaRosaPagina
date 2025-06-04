// script_equinos.js

// Abrir modal
function openModal(equino) {
    document.getElementById('equinoName').textContent = equino.nombre;
    document.getElementById('equinoRaza').textContent = equino.raza || 'No especificada';
    document.getElementById('equinoEdad').textContent = equino.edad || 'Desconocida';
    document.getElementById('equinoCriadero').textContent = 'Criadero Villa Rosa'; // fijo o podrías agregarlo en el modelo
    document.getElementById('equinoGenero').textContent = equino.genero || 'No especificado';
    document.getElementById('equinoTipo').textContent = equino.tipo || 'No especificado';

    // Link de Whatsapp (ejemplo, cambiar por el que uses)
    const whatsappLink = document.getElementById('whatsappLink');
    whatsappLink.href = `https://wa.me/1234567890?text=Estoy%20interesado%20en%20el%20equino%20${encodeURIComponent(equino.nombre)}`;

    document.getElementById('equinoModal').style.display = 'block';
}

// Cerrar modal
function closeModal() {
    document.getElementById('equinoModal').style.display = 'none';
}

// Cargar equinos desde API
async function cargarEquinos() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/equinos/');
        const data = await response.json();

        const container = document.getElementById('equinosContainer');
        container.innerHTML = ''; // limpiar contenido previo

        data.equinos.forEach(equino => {
            // Crear un div para cada equino
            const div = document.createElement('div');
            div.className = 'equino-card';

            // Construir el HTML del equino (puedes personalizar el diseño)
            div.innerHTML = `
                <img src="${equino.foto}" alt="Foto de ${equino.nombre}" />
                <h3>${equino.nombre}</h3>
                <p>Raza: ${equino.raza || 'No especificada'}</p>
                <p>Edad: ${equino.edad || 'Desconocida'} años</p>
                <p>Precio: $${equino.precio || 'Consultar'}</p>
                <button onclick='openModal(${JSON.stringify(equino)})'>Ver detalles</button>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        console.error('Error cargando los equinos:', error);
    }
}

// Ejecutar la carga al abrir la página
window.onload = cargarEquinos;
