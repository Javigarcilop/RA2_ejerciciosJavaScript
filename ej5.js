/* 5. Cálculo de Promedio y Mediana
● Descripción: Implementa una función que reciba un array de números y calcule el
promedio y la mediana. Usa una función sort para ordenar los números antes de
calcular la mediana.
● Requisitos:
○ Usa una estructura de control if-else para manejar arrays con un número
par o impar de elementos.
○ Utiliza una función para calcular el promedio y otra para la mediana.
● Objetivo: Trabajar con arrays, funciones y algoritmos de ordenamiento.*/

         function arrayNumeros() {
            let numeros = [5, 8, 4, 7];
            numeros.sort(function(a, b){return a - b});
            return numeros;
         }
         console.log(arrayNumeros());

        function calcularPromedio() {
            let numeros = arrayNumeros();
            let suma = 0;
            for(var i = 0; i < numeros.length; i++){   
                 suma = suma + numeros[i]; 
          }
            var promedio = suma / numeros.length;
            console.log(promedio);
            return promedio;
        }
        calcularPromedio();
       
        function calcularMediana() {
            let numeros = arrayNumeros();
            for(var i = 0; i < numeros.length; i++){ 
                var mediana = (numeros[i] + 1) / 2;
                console.log(mediana);   
            }       
            return mediana;
        }     
        calcularMediana();
   