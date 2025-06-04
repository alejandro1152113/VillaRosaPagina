// Lista de equinos
const equinos = [
    { name: "Equino 1", image: "/img/equino1.jpg", raza: "Raza", edad: 5, criadero: "Villa Rosa", genero: "Macho", tipo: "Caballo", whatsapp: "3103494453" },
    { name: "Equino 2", image: "/img/equino2.jpg", raza: "Raza", edad: 6, criadero: "Villa Rosa", genero: "Hembra", tipo: "yegua", whatsapp: "3103494453" },
    { name: "Equino 3", image: "/img/equino3.jpg", raza: "Raza", edad: 4, criadero: "Villa Rosa", genero: "Macho", tipo: "Caballo", whatsapp: "3103494453" },
    { name: "Equino 4", image: "/img/equino4.jpg", raza: "Raza", edad: 7, criadero: "Villa Rosa", genero: "Hembra", tipo: "yegua", whatsapp: "3103494453" },
    { name: "Equino 5", image: "/img/equino5.jpg", raza: "Raza", edad: 3, criadero: "Villa Rosa", genero: "Macho", tipo: "Caballo", whatsapp: "3103494453" },
    { name: "Equino 6", image: "/img/equino6.jpg", raza: "Raza", edad: 8, criadero: "Villa Rosa", genero: "Hembra", tipo: "yegua", whatsapp: "3103494453" },
    { name: "Equino 7", image: "/img/equino7.jpg", raza: "Raza", edad: 5, criadero: "Villa Rosa", genero: "Macho", tipo: "Caballo", whatsapp: "3103494453" },
    { name: "Equino 8", image: "/img/equino8.jpg", raza: "Raza", edad: 6, criadero: "Villa Rosa", genero: "Hembra", tipo: "yegua", whatsapp: "3103494453" },
    { name: "Equino 9", image: "/img/equino9.jpg", raza: "Raza", edad: 4, criadero: "Villa Rosa", genero: "Macho", tipo: "Caballo", whatsapp: "3103494453" },
    { name: "Equino 10", image: "/img/equino10.jpg", raza: "Raza", edad: 7, criadero: "Villa Rosa", genero: "Hembra", tipo: "yegua", whatsapp: "3103494453" },
    { name: "Equino 11", image: "/img/equino11.jpg", raza: "Raza", edad: 3, criadero: "Villa Rosa", genero: "Macho", tipo: "Caballo", whatsapp: "3103494453" },
    { name: "Equino 12", image: "/img/equino12.jpg", raza: "Raza", edad: 5, criadero: "Villa Rosa", genero: "Hembra", tipo: "yegua", whatsapp: "3103494453" },
    { name: "Equino 13", image: "/img/equino13.jpg", raza: "Raza", edad: 6, criadero: "Villa Rosa", genero: "Macho", tipo: "Caballo", whatsapp: "3103494453" },
    { name: "Equino 14", image: "/img/equino14.jpg", raza: "Raza", edad: 4, criadero: "Villa Rosa", genero: "Hembra", tipo: "yegua", whatsapp: "3103494453" },
    { name: "Equino 15", image: "/img/equino15.jpg", raza: "Raza", edad: 7, criadero: "Villa Rosa", genero: "Macho", tipo: "Caballo", whatsapp: "3103494453" },
];

const equinosPerPage = 6; // Número de equinos por página
let currentPage = 1; // Página actual

const equinosContainer = document.getElementById('equinosContainer');
const paginationContainer = document.createElement('div');
paginationContainer.classList.add('pagination');

// Función para verificar si la imagen existe
function checkImageExists(url, callback) {
    const img = new Image();
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
    img.src = url;
}

// Mostrar equinos por página
function renderEquinos() {
    equinosContainer.innerHTML = '';
    const startIndex = (currentPage - 1) * equinosPerPage;
    const endIndex = startIndex + equinosPerPage;
    const equinosToShow = equinos.slice(startIndex, endIndex);

    equinosToShow.forEach(equino => {
        const equinoCard = document.createElement('div');
        equinoCard.classList.add('equino-card');

        const image = document.createElement('img');
        const defaultImg = '/img/default.jpg';

        checkImageExists(equino.image, exists => {
            image.src = exists ? equino.image : defaultImg;
        });
        image.alt = equino.name;

        equinoCard.innerHTML = `
            <h3>${equino.name}</h3>
            <p><strong>Raza:</strong> ${equino.raza}</p>
            <button class="view-details" onclick="showDetails('${equino.name}')">Ver Detalles</button>
        `;

        equinoCard.insertBefore(image, equinoCard.firstChild);
        equinosContainer.appendChild(equinoCard);
    });

    renderPagination();
}

// Renderizar paginación
function renderPagination() {
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(equinos.length / equinosPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.onclick = () => changePage(i);
        paginationContainer.appendChild(pageButton);
    }

    document.body.appendChild(paginationContainer);
}

// Cambiar de página
function changePage(page) {
    currentPage = page;
    renderEquinos();
}

// Mostrar detalles en el modal
function showDetails(equinoName) {
    const equino = equinos.find(e => e.name === equinoName);
    if (equino) {
        const image = new Image();
        image.onload = () => {
            document.getElementById('equinoImage').src = equino.image;
        };
        image.onerror = () => {
            document.getElementById('equinoImage').src = '/img/default.jpg';
        };
        image.src = equino.image;

        document.getElementById('equinoName').textContent = equino.name;
        document.getElementById('equinoRaza').textContent = equino.raza;
        document.getElementById('equinoEdad').textContent = equino.edad;
        document.getElementById('equinoCriadero').textContent = equino.criadero;
        document.getElementById('equinoGenero').textContent = equino.genero;
        document.getElementById('equinoTipo').textContent = equino.tipo;

        const whatsappLink = document.getElementById('whatsappLink');
        const whatsappMessage = `Estoy interesado en ${equino.name} para compra o arrendar.`;
        whatsappLink.href = `https://wa.me/${equino.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

        document.getElementById('equinoModal').style.display = 'block';
    }
}

// Cerrar el modal
function closeModal() {
    document.getElementById('equinoModal').style.display = 'none';
}

window.onload = renderEquinos;