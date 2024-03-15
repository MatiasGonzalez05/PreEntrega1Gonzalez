

let nombre = prompt("ingrese su nombre");
let edad = Number(prompt("ingrese su edad"));

if (edad >= 18) {
    alert("Bienvenido al simulador de cuotas " + nombre);
    simularCuotas();
} else {
    alert("Tenes que ser mayor de edad para usar el simulador de cuotas!")
}

function calcularCuotas(montoIngresado, cuotas) {
    let cuotaMensual = montoIngresado / cuotas;
    return cuotaMensual;
}

/* simulador de cuotas */
function simularCuotas() {
    let monto = prompt("Ingrese el monto total a financiar");
    let numeroMaxCuotas = parseInt(prompt("En cuantas cuotas quiere hacerlo?"));
    
    if (isNaN(monto || numeroMaxCuotas)) { /* isnan(monto) || isnan(numeromaxcuotas) */
        alert("Los numeros ingresados no son validos, intentelo de nuevo!");
        return;
    } else if (monto <= 0 || numeroMaxCuotas <= 0) {
        alert("Los datos deben ser mayores a cero");
        return
    } else {
        alert("Procesando...")
    }

    let resultados = "Simulacion de pagos en Cuotas:\n";

    for (let cantidadDeCuotas = 1; cantidadDeCuotas <= numeroMaxCuotas; cantidadDeCuotas++) {
        let cuotaMensual = calcularCuotas(monto, cantidadDeCuotas);
        resultados += "Cuotas: " + cantidadDeCuotas + " - Monto mensual: $" + cuotaMensual.toFixed(2) + "\n";
    }
    alert(resultados);
}


