/* 2. Conversor de Temperatura
● Descripción: Crea una función que convierta una temperatura dada en grados
Celsius a Fahrenheit y viceversa. Usa el parámetro de una función para determinar
la dirección de la conversión.
● Requisitos:
○ Usa switch para elegir entre las conversiones.
○ Utiliza typeof para verificar que las entradas sean números.
○ Añade manejo de errores para valores no válidos usando try...catch.
● Objetivo: Trabajar con parámetros, manejo de tipos y estructuras de control.*/
      
          
     try{
        let opcion = prompt("Opcion 1 para realizar conversion a grados Celsius / Opcion 2 para lo contrario: ", 0);
        opcion = parseInt(opcion);
        console.log("Tipo de dato: ", typeof opcion);

        function convertidorGradosCelsius(gradosC) {  
            let gradosF = (gradosC * 9 / 5) + 32;
            console.log(gradosC + ' grados Celsius son ' + gradosF + ' grados Fahrenheit');
        }

        function convertidorGradosFahrenheit(gradosF) {
            let gradosC = 5 / 9 * (gradosF - 32);
            console.log(gradosF + ' grados Fahrenheit son ' + gradosC + ' grados Celsius');
        }

        switch (opcion) {
            case 1:
                    let gradosC = prompt("Ingrese grados Celsius: ", 0);
                    gradosC = parseFloat(gradosC);
                    console.log("Tipo de dato: ", typeof opcion);
                    convertidorGradosCelsius(gradosC);
                    break;
            case 2:           
                let gradosF = prompt("Ingrese grados Fahrenheit: ", 0);
                gradosF = parseFloat(gradosF);
                console.log("Tipo de dato: ", typeof opcion);
                convertidorGradosFahrenheit(gradosF);
                break;
            default:
                alert('Opción Incorrecta');
        }
    } catch (error) {
        console.error("Error de ejecución", error);
    }
 