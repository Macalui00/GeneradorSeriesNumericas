//Definición de las variables e inicialización
let numeroInicial = 0;
let numeroFinal = 0; 
let incremento = 0;

let continuar = "S"

while(continuar == "S"){

    // Solicita los numeros para armar una serie creciente de números
    numeroInicial = parseInt(prompt("Ingrese el numero desde el cual desea iniciar la serie numérica creciente."));
    numeroFinal = parseInt(prompt("Ingrese el número de finalización de la serie numérica creciente."));
    incremento = parseInt(prompt("Indique de cuanto será el incremento de la serie numérica."));

    // Como tiene que ser creciente se chequea que los números ingresados respeten esta condición
    if(numeroInicial < numeroFinal){

        // Como la serie debe ser creciente, el incremento tiene que ser positivo
        if(incremento > 0){

            // Defino la variable donde se almacenará la serie numérica
            let serie = "";

            // El for desde el cual se genera la serie
            for(let i = numeroInicial; i <= numeroFinal; i += incremento){
                if (serie == ""){
                    serie = i;
                } else {
                    serie = serie + ", " + i;
                }
            }

            alert("La serie final generada es: "+ serie);

        }
    } else { // Caso donde los números ingresados no cumplen la condición del if
        
        alert("La serie debe ser creciente.");

    }

    // Pregunta al cliente si desea realizar otra serie numérica creciente
    continuar = prompt("¿Desea generar otra serie? S/N.");

    // Chequea si el valor ingresado por el usuario es correcto
    while((continuar != "S") && (continuar != "N")){

        continuar = prompt("Respuesta incorrecta ¿Desea generar otra serie? S/N.");

    }

}

// Agregado simplemente como un saludo final
if(continuar == "N"){

    alert("¡Muchas gracias! ¡Hasta Luego!");

}