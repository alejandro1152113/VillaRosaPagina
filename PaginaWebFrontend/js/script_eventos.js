const events = {
    '2025-01-15': { title: 'Exhibición de Caballos', description: 'Fecha: 15 de Enero, 2025 \n Ubicación: Criadero Villa Rosa', whatsappMessage: 'El día 15/enero/2025, el evento "Exhibición de Caballos", me gustaría participar.' },
    '2025-01-25': { title: 'Torneo de Equitación', description: 'Fecha: 25 de Enero, 2025 \n Ubicación: Club Hípico Nacional', whatsappMessage: 'El día 25/enero/2025, el evento "Torneo de Equitación", me gustaría participar.' },
    '2025-02-10': { title: 'Clínica de Equinos', description: 'Fecha: 10 de Febrero, 2025 \n Ubicación: Criadero Villa Rosa', whatsappMessage: 'El día 10/febrero/2025, el evento "Clínica de Equinos", me gustaría participar.' },
    '2025-02-20': { title: 'Competencia de Salto', description: 'Fecha: 20 de Febrero, 2025 \n Ubicación: Club Hípico Nacional', whatsappMessage: 'El día 20/febrero/2025, el evento "Competencia de Salto", me gustaría participar.' },
    '2025-03-20': { title: 'Exhibición de Equinos', description: 'Fecha: 20 de Marzo, 2025 \n Ubicación: Criadero Villa Rosa', whatsappMessage: 'El día 20/marzo/2025, el evento "Exhibición de Equinos", me gustaría participar.' },
    '2025-04-05': { title: 'Competencia de Caballos', description: 'Fecha: 5 de Abril, 2025 \n Ubicación: Club Hípico Nacional', whatsappMessage: 'El día 5/abril/2025, el evento "Competencia de Caballos", me gustaría participar.' },
    '2025-05-12': { title: 'Torneo Nacional de Equitación', description: 'Fecha: 12 de Mayo, 2025 \n Ubicación: Club Hípico Nacional', whatsappMessage: 'El día 12/mayo/2025, el evento "Torneo Nacional de Equitación", me gustaría participar.' },
    '2025-06-15': { title: 'Exhibición Internacional', description: 'Fecha: 15 de Junio, 2025 \n Ubicación: Criadero Villa Rosa', whatsappMessage: 'El día 15/junio/2025, el evento "Exhibición Internacional", me gustaría participar.' },
    '2025-07-25': { title: 'Competencia de Resistencia', description: 'Fecha: 25 de Julio, 2025 \n Ubicación: Criadero Villa Rosa', whatsappMessage: 'El día 25/julio/2025, el evento "Competencia de Resistencia", me gustaría participar.' },
    '2025-08-05': { title: 'Clínica de Formación Ecuestre', description: 'Fecha: 5 de Agosto, 2025 \n Ubicación: Club Hípico Nacional', whatsappMessage: 'El día 5/agosto/2025, el evento "Clínica de Formación Ecuestre", me gustaría participar.' },
    '2025-09-10': { title: 'Exhibición de Caballos', description: 'Fecha: 10 de Septiembre, 2025 \n Ubicación: Criadero Villa Rosa', whatsappMessage: 'El día 10/septiembre/2025, el evento "Exhibición de Caballos", me gustaría participar.' },
    '2025-10-12': { title: 'Concurso de Salto de Obstáculos', description: 'Fecha: 12 de Octubre, 2025 \n Ubicación: Club Hípico Nacional', whatsappMessage: 'El día 12/octubre/2025, el evento "Concurso de Salto de Obstáculos", me gustaría participar.' },
    '2025-11-01': { title: 'Torneo Internacional de Equinos', description: 'Fecha: 1 de Noviembre, 2025 \n Ubicación: Criadero Villa Rosa', whatsappMessage: 'El día 1/noviembre/2025, el evento "Torneo Internacional de Equinos", me gustaría participar.' },
    '2025-12-15': { title: 'Competencia de Doma', description: 'Fecha: 15 de Diciembre, 2025 \n Ubicación: Club Hípico Nacional', whatsappMessage: 'El día 15/diciembre/2025, el evento "Competencia de Doma", me gustaría participar.' }
};

let currentMonth = new Date().getMonth(); // Obtiene el mes actual (0 - enero, 11 - diciembre)

function changeMonth(offset) {
    currentMonth += offset;

    // Asegurarse de que el mes esté dentro del rango de enero (0) a diciembre (11)
    if (currentMonth < 0) {
        currentMonth = 11; // Volver a diciembre
    } else if (currentMonth > 11) {
        currentMonth = 0; // Volver a enero
    }

    renderCalendar(currentMonth);
}

function renderCalendar(month) {
    const calendar = document.getElementById('calendar');
    const monthYear = document.getElementById('monthYear');
    const today = new Date();
    const year = today.getFullYear();

    monthYear.innerText = new Date(year, month).toLocaleString('es-ES', { month: 'long', year: 'numeric' }).toUpperCase();

    calendar.innerHTML = ''; // Limpiar el calendario

    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Obtener el número de días en el mes

    for (let i = 1; i <= daysInMonth; i++) {
        let day = document.createElement('div');
        day.classList.add('day');
        let date = `${year}-${(month + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;

        day.innerText = i;

        // Verificar si el día tiene un evento
        if (events[date]) {
            day.classList.add('event-day');
            let eventTitle = document.createElement('div');
            eventTitle.classList.add('event-title');
            eventTitle.innerText = events[date].title;
            day.appendChild(eventTitle);

            day.onclick = () => showEvent(date); // Mostrar el evento al hacer clic
        }

        calendar.appendChild(day);
    }
}

function showEvent(date) {
    document.getElementById('eventTitle').innerText = events[date].title;
    document.getElementById('eventDescription').innerText = events[date].description;
    document.getElementById('whatsappLink').href = `https://wa.me/3103494453?text=${encodeURIComponent(events[date].whatsappMessage)}`;
    document.getElementById('eventModal').classList.add('active');
}

function closeModal() {
    document.getElementById('eventModal').classList.remove('active');
}

// Inicializar el calendario al cargar la página
renderCalendar(currentMonth);
