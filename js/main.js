/* pedir el nombre y la edad */
let nombre = prompt("ingrese su nombre");
let edad = Number(prompt("ingrese su edad"));
/* si es mayor de edad se puede usar el simulador, si no no */
if (edad >= 18) {
    alert("Bienvenido al simulador de cuotas " + nombre);
    simularCuotas();
} else {
    alert("Tenes que ser mayor de edad para usar el simulador de cuotas!")
}

function calcularCuotas(montoIngresado, cuotas) {
    let cuotaMensual = montoIngresado / cuotas; //cambiar de let a const
    return cuotaMensual;
} 

/* simulador de cuotas */
function simularCuotas() {
    let monto = parseFloat(prompt("Ingrese el monto a financiar"));
    let cuotasIngresadas = parseInt(prompt("En cuantas cuotas quiere hacerlo?"));
    
    if (isNaN(monto || cuotasIngresadas)) { /* isnan(monto) || isnan(numeromaxcuotas) */
        alert("Los numeros ingresados no son validos, intentelo de nuevo!");
        return;
    } else if (monto <= 0 || cuotasIngresadas <= 0) {
        alert("Los datos deben ser mayores a cero");
        return
    } else {
        alert("Procesando...")
    }

    let resultado = "Simulacion de pagos en Cuotas:\n";

    for (let cantidadDeCuotas = cuotasIngresadas; cantidadDeCuotas <= cuotasIngresadas; cantidadDeCuotas++) {
        let cuotaMensual = calcularCuotas(monto, cantidadDeCuotas);
        resultado += "Cuotas: " + cantidadDeCuotas + " - Monto mensual: $" + cuotaMensual.toFixed(2) + "\n";
    }
    alert(resultado);
}

