document.getElementById("reciboForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar recarga de página

    // Obtener los valores del formulario
    const ciudad = document.getElementById("ciudad").value;
    const fecha = document.getElementById("fecha").value;
    const recibidoDe = document.getElementById("recibidoDe").value;
    const concepto = document.getElementById("concepto").value;
    const valor = document.getElementById("valor").value;

    // Convertir fecha a formato día/mes/año
    const fechaObj = new Date(fecha);
    const dia = fechaObj.getDate();
    const mes = fechaObj.getMonth() + 1; // Mes empieza en 0
    const anio = fechaObj.getFullYear();

    // Convertir monto en letras
    const valorLetras = convertirNumeroALetras(valor);

    // Llamar a la función de generación de PDF directamente
    generarReciboPDF(ciudad, dia, mes, anio, recibidoDe, concepto, valor, valorLetras);

    // Mostrar botón de descarga (opcional si deseas agregar más opciones)
    document.getElementById("descargarPDF").style.display = "block";
});

// Función para convertir números a texto
function convertirNumeroALetras(numero) {
    const unidades = ["", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve"];
    const especiales = ["Diez", "Once", "Doce", "Trece", "Catorce", "Quince"];
    const decenas = ["", "", "Veinte", "Treinta", "Cuarenta", "Cincuenta", "Sesenta", "Setenta", "Ochenta", "Noventa"];

    if (numero < 10) return unidades[numero];
    if (numero >= 10 && numero < 16) return especiales[numero - 10];
    if (numero >= 16 && numero < 100) {
        return decenas[Math.floor(numero / 10)] + (numero % 10 !== 0 ? " y " + unidades[numero % 10] : "");
    }

    return "Valor demasiado grande";
}
