document.getElementById("reciboForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar recargar la página
    generarVistaPrevia();
});

document.getElementById("descargarPDF").addEventListener("click", function () {
    generarReciboPDF();
});

function generarVistaPrevia() {
    const ciudad = document.getElementById("ciudad").value;
    const fecha = document.getElementById("fecha").value;
    const recibidoDe = document.getElementById("recibidoDe").value;
    const concepto = document.getElementById("concepto").value;
    const valor = document.getElementById("valor").value;

    if (!ciudad || !fecha || !recibidoDe || !concepto || !valor) {
        alert("Por favor, complete todos los campos antes de generar la vista previa.");
        return;
    }

    const previewDiv = document.getElementById("reciboPreview");
    previewDiv.innerHTML = `
        <div class="recibo-preview">
            <h3>RECIBO DE PAGO</h3>
            <p><strong>Ciudad:</strong> ${ciudad}</p>
            <p><strong>Fecha:</strong> ${fecha}</p>
            <p><strong>Recibido de:</strong> ${recibidoDe}</p>
            <p><strong>Concepto:</strong> ${concepto}</p>
            <p><strong>Valor:</strong> $${valor}</p>
        </div>
    `;

    document.getElementById("descargarPDF").style.display = "block";
}

function generarReciboPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const previewDiv = document.getElementById("reciboPreview");

    if (!previewDiv.innerHTML) {
        alert("Primero genera la vista previa del recibo.");
        return;
    }

    html2canvas(previewDiv).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        doc.addImage(imgData, "PNG", 10, 10, 180, 100);
        doc.save("recibo.pdf");
    });
}
