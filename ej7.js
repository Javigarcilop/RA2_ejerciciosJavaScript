/* 7. Generador de Números Primos
● Descripción: Escribe una función que reciba un número y devuelva un array con
todos los números primos menores o iguales a ese número.
● Requisitos:
○ Usa un bucle anidado para comprobar si un número es primo.
○ Usa una estructura for o while para iterar sobre los números.
○ Utiliza una función isPrime() para verificar si un número es primo.
● Objetivo: Trabajar con bucles anidados y funciones para resolver un problema
matemático.*/
   
let numero = Math.floor(Math.random() * 1000) + 1;;
let primos;

function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }
  for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }
  return true;
}

function generarPrimos(numeroMaximo) {
  let primos = [];
  for (let n = 2; n <= numeroMaximo; n++) {
    if (esPrimo(n)) {
      primos.push(n);
    }
  }
  return primos;
}

primos = generarPrimos(numero);

console.log(primos);
console.log(primos.length + ` primos`);

        
