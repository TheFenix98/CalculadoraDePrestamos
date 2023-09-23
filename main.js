let cuota = 0; // Declaración de cuota fuera del evento submit

let resultados = []

document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault();
    const prestamo = {
        prestamoPedido: parseInt(document.getElementById("monto_prestamo").value),
        periodo: parseInt(document.getElementById("cantidad_cuotas").value),
        tasaDeInteres: document.getElementById("tasa_de_interes").value / 100,
        tablaDeAmortizacion: []
    }

    if (prestamo.prestamoPedido < 100000) {
        alert("El monto ingresado debe ser mayor a $100,000. Intente de nuevo");
        return; // Salir de la función si no se cumple la condición
    }

    function calcularCuota(prestamo, tasaDeInteres, periodo) {
        // Convierte la tasa de interés anual a tasa periódica
        const tasaPeriodica = tasaDeInteres / 12; // Suponiendo que la tasa es anual y se paga mensualmente

        // Calcula la cuota utilizando la fórmula del sistema de amortización francés
        const cuota = (prestamo * tasaPeriodica * Math.pow(1 + tasaPeriodica, periodo)) / (Math.pow(1 + tasaPeriodica, periodo) - 1);

        return cuota;
    }

    cuota = calcularCuota(prestamo.prestamoPedido, prestamo.tasaDeInteres, prestamo.periodo); // Asignación de cuota

    const tasaPeriodica = prestamo.tasaDeInteres / 12;
    
    const tabla = document.getElementById("cuadroAmortizacion")
    tabla.innerHTML = "<table><tr><th>N° de Cuota</th><th>Cuota a pagar</th><th>Intereses</th><th>Capital amortizado</th><th>Capital vivo</th></tr><tr><td>0</td><td>-</td><td>-</td><td>-</td><td>"+ prestamo.prestamoPedido+ "</td></tr>"

    


    let capitalVivo = prestamo.prestamoPedido;

    for (let i = 1; i <= prestamo.periodo; i++) {
        let numeroCuota = i;


        let interes = capitalVivo * tasaPeriodica;
        interes = interes.toFixed(2);

        let capitalAmortizado = cuota - interes;
        capitalAmortizado = capitalAmortizado.toFixed(2);

        capitalVivo -= capitalAmortizado;

        if (capitalVivo < 0 ) {
            capitalVivo=0
        }

        const cuotaObjeto = {
            numeroCuota: numeroCuota,
            cuota: cuota,
            interes: interes,
            capitalAmortizado: capitalAmortizado,
            capitalVivo: capitalVivo
        };

        resultados.push(cuotaObjeto)
    }

    for (let i = 0; i < resultados.length; i++) {
        tabla.innerHTML += `<tr><td>${resultados[i].numeroCuota}</td><td>${resultados[i].cuota.toFixed(2)}</td><td>${resultados[i].interes}</td><td>${resultados[i].capitalAmortizado}</td><td>${resultados[i].capitalVivo.toFixed(2)}</td></tr>`;
    }

    tabla.innerHTML += "</table>";
});