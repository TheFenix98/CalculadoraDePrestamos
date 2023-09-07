let cuota = 0; // Declaración de cuota fuera del evento submit

document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();
    const prestamo = parseInt(document.getElementById("monto_prestamo").value);
    const periodo = parseInt(document.getElementById("cantidad_cuotas").value);
    const tasaDeInteres = document.getElementById("tasa_de_interes").value/100

    while (prestamo < 100000) {
        if (prestamo < 100000) {
            alert("El monto ingresado debe ser mayor a $100,000. Intente de nuevo");
        }
    }

    function calcularCuota(prestamo, tasaDeInteres, periodo) {
        // Convierte la tasa de interés anual a tasa periódica
        const tasaPeriodica = tasaDeInteres / 12; // Suponiendo que la tasa es anual y se paga mensualmente

        // Calcula la cuota utilizando la fórmula del sistema de amortización francés
        const cuota = (prestamo * tasaPeriodica * Math.pow(1 + tasaPeriodica, periodo)) / (Math.pow(1 + tasaPeriodica, periodo) - 1);

        return cuota;
    }

    cuota = calcularCuota(prestamo, tasaDeInteres, periodo); // Asignación de cuota

    alert("Usted va a pagar " + periodo + " cuotas de $" + cuota.toFixed(2).toLocaleString('es-ES'));
});


