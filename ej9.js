/* 9. Generador de Tablas de Multiplicar
● Descripción: Crea una función que reciba un número y genere la tabla de multiplicar
de ese número hasta 10. La función debe permitir al usuario elegir el límite de la
tabla.
● Requisitos:
○ Usa un bucle for para generar las tablas.
○ Implementa manejo de errores si el número ingresado no es válido.
● Objetivo: Trabajar con bucles y funciones parametrizadas.*/


        let numero;

        function generadorTablaMultiplicar(numero) {
            for (var i = 0; i < 11; i++) {
                let resultado = numero*i;
                console.log(numero + ' x ' + i + " = " + resultado);
            }
        }
        generadorTablaMultiplicar(5);
