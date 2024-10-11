/* 4. Simulación de Lanzamiento de Dados
● Descripción: Crea una función que simule el lanzamiento de dos dados (números
aleatorios entre 1 y 6). El programa debe contar cuántas veces se obtiene un total 
de 7 al lanzar los dados 100 veces.
● Requisitos:
○ Usa un bucle for para realizar las simulaciones.
○ Utiliza Math.random() para generar los números aleatorios.
○ Usa una función para encapsular la lógica del lanzamiento de dados.
● Objetivo: Trabajar con números aleatorios, bucles y funciones.*/ 
   
   function simulacion() {
        let contador = 0; 
        for (let i = 0; i < 100; i++) {
            let primerDado = Math.floor(Math.random() * 6) + 1;
            let segundoDado = Math.floor(Math.random() * 6) + 1;
            
            if (primerDado + segundoDado === 7) {
                contador++;
            }
        }
        console.log(contador);
    }
    simulacion();

