let prestamo = 0;
let tasaDeInteres = 0.05;
let periodo = 0;
let cuota = 0;

while (prestamo <100000) {
    prestamo= parseInt(prompt("ingrese el monto que desea pedir:"))
    if (prestamo < 100000){
        alert("el monto ingresado debe ser mayor a $100.000. intente de nuevo")
    }
}

function calcularCuota(prestamo, tasaDeInteres, periodo) {
    // Convierte la tasa de interés anual a tasa periódica
    const tasaPeriodica = tasaDeInteres / 12; // Suponiendo que la tasa es anual y se paga mensualmente

    // Calcula la cuota utilizando la fórmula del sistema de amortización francés
    const cuota = (prestamo * tasaPeriodica * Math.pow(1 + tasaPeriodica, periodo)) / (Math.pow(1 + tasaPeriodica, periodo) - 1);

    return cuota;
}

while (periodo !== 6 && periodo !== 12 && periodo !== 18 && periodo !== 24) {
    periodo = parseInt(prompt("En cuántas cuotas quiere pagar el crédito? (6, 12, 18 o 24)"));

    if (periodo !== 6 && periodo !== 12 && periodo !== 18 && periodo !== 24) {
        alert("El número de cuotas ingresado no es válido");
    } else {
        cuota= calcularCuota (prestamo, tasaDeInteres, periodo)
    }
}

alert("usted va a pagar " + periodo + " cuotas de $" + cuota.toFixed(2))


