/* 6. Juego de Piedra, Papel o Tijeras
● Descripción: Implementa el clásico juego de "Piedra, Papel o Tijeras" donde el
usuario juega contra la computadora. Usa prompt para recibir la jugada del usuario
y Math.random() para la jugada de la computadora.
● Requisitos:
○ Usa una función switch para determinar el ganador.
○ Controla la lógica de empate, victoria y derrota con una estructura if-else.
○ Añade validaciones para entradas incorrectas.
● Objetivo: Usar funciones, estructuras de control y manejo de entradas aleatorias.*/
   
        let entradaJugador = prompt("1:PIEDRA / 2:PAPEL / 3:TIJERA");
        entradaJugador = parseInt(entradaJugador);
        let entradaOrdenador = Math.floor(Math.random() * 3) + 1;

        if(entradaJugador == 1){
            console.log('Has elegido Piedra');
        }else if (entradaJugador == 2){
            console.log('Has elegido Papel');
        }else if (entradaJugador == 2){
            console.log('Has elegido Tijera');
        }

        switch (entradaJugador) {
            case 1: 
                if (entradaOrdenador === 1) {
                    console.log('El ordenador ha elegido Piedra');
                    console.log('Empate'); 
                } else if (entradaOrdenador === 2) {
                    console.log('El ordenador ha elegido Papel');
                    console.log('El ordenador gana'); 
                } else {
                    console.log('El ordenador ha elegido Tijera');
                    console.log('Has ganado'); 
                }
                break;
            case 2: 
                if (entradaOrdenador === 1) {
                    console.log('El ordenador ha elegido Piedra');
                    console.log('Has ganado'); 
                } else if (entradaOrdenador === 2) {
                    console.log('El ordenador ha elegido Papel');
                    console.log('Empate'); 
                } else {
                    console.log('El ordenador ha elegido Tijera');
                    console.log('El ordenador gana'); 
                }
                break;
            case 3: 
                if (entradaOrdenador === 1) {
                    console.log('El ordenador ha elegido Piedra');
                    console.log('El ordenador gana'); 
                } else if (entradaOrdenador === 2) {
                    console.log('El ordenador ha elegido Papel');
                    console.log('Has ganado'); 
                } else {
                    console.log('El ordenador ha elegido Tijera');
                    console.log('Empate'); 
                }
                break;
            default:
                console.log('Entrada no válida');

        }
   