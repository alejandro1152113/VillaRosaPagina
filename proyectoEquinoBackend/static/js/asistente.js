document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.createElement("div");
    chatButton.innerHTML = "💬 Asistente";
    chatButton.classList.add("chat-button");
    document.body.appendChild(chatButton);

    const chatBox = document.createElement("div");
    chatBox.classList.add("chat-box");
    chatBox.innerHTML = `
        <div class="chat-header">Asistente Virtual</div>
        <div class="chat-body" id="chatBody"></div>
        <div class="chat-footer">
            <div class="quick-replies" id="quickReplies"></div>
        </div>
    `;
    document.body.appendChild(chatBox);

    chatButton.addEventListener("click", () => {
        chatBox.classList.toggle("active");
        if (chatBox.classList.contains("active")) {
            showBotResponse("Hola, ¿cómo puedo ayudarte hoy?");
        }
    });

    const chatBody = document.getElementById("chatBody");
    const quickReplies = document.getElementById("quickReplies");

    // Muestra un mensaje del bot
    function showBotResponse(message) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("bot-message");
        msgDiv.innerText = message;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        showOptions();
    }

    // Muestra opciones de respuesta predefinidas
    function showOptions() {
        quickReplies.innerHTML = "";  // Limpiar opciones anteriores

        const options = [
            "Ver caballos disponibles",
            "Comprar caballos",
            "Alquilar caballos",
            "Contactar por WhatsApp"
        ];

        options.forEach(option => {
            const button = document.createElement("button");
            button.classList.add("quick-reply");
            button.innerText = option;
            button.addEventListener("click", () => handleOption(option));
            quickReplies.appendChild(button);
        });
    }

    // Maneja las opciones seleccionadas por el usuario
    function handleOption(option) {
        const response = getResponse(option);
        showBotResponse(response);
    }

    // Respuestas predefinidas para las opciones
    function getResponse(option) {
        switch (option) {
            case "Ver caballos disponibles":
                window.location.href = "equinos.html";
                return "Tenemos varios caballos disponibles. ¿Te gustaría ver más detalles sobre ellos?";
            case "Comprar caballos":
                window.location.href = "equinos.html";
                return "Puedes ver los caballos disponibles en nuestra sección de equinos o te puedo llevar a WhatsApp para más información.";
            case "Alquilar caballos":
                window.location.href = "equinos.html";
                return "Ofrecemos alquiler de caballos. ¿Te gustaría contactar con un asesor por WhatsApp?";
            case "Contactar por WhatsApp":
                window.location.href = "https://wa.me/3103494453?text=Hola, quiero más información sobre la compra y alquilar equino.";
                return ""; // No mostrar respuesta en el chat
            default:
                return "No entendí tu solicitud, por favor selecciona una opción.";
        }
    }
});
