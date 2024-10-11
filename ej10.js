/* 10. Manejo de Errores Avanzado
● Descripción: Escribe un programa que simule una calculadora básica con las
operaciones de suma, resta, multiplicación y división. El programa debe manejar los
siguientes errores:
○ División por cero.
○ Entrada no válida (no es un número).
○ Operación no válida.
● Requisitos:
○ Usa try...catch para manejar los errores.
○ Implementa una estructura if-else o switch para las operaciones.
○ Usa throw para lanzar excepciones personalizadas si se detecta un error.
● Objetivo: Practicar el manejo avanzado de errores y excepciones en un entorno de
lógica matemática..*/


try {
    let operacion = prompt("Teclee la operación s(suma), r(resta), m(multiplicacion), d(division): ");
    let num1 = prompt("Introduzca el primer número:");
    num1 = parseFloat(num1);
    let num2 = prompt("Introduzca el segundo número:");
    num2 = parseFloat(num2);
    let resultado;

    switch (operacion) {
        case "s":
           resultado = num1 + num2;
        break;
        case "r":
           resultado = num1 - num2;
        break;
        case "m":
           resultado = num1 * num2;
        break;
        case "d":
           if (num2 == 0) {
              throw new Error("División por cero no permitida.");
            }
           resultado = num1 / num2;
        break;
        default:
           throw new Error("Operación incorrecta");
    }

    console.log("El resultado es: " + resultado);
} catch (error) {
    console.error(error.message);
}