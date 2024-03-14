/* Declaracion de Variables */
let maxNumber = 100;
let secretNumber = Math.floor(Math.random()*maxNumber);
let userNumber = 0;
let attempts = 1;
let maxAttempts = 6;

while (userNumber != secretNumber){
    userNumber = parseInt(prompt('Ingresa un numero entre el 1 y ' + maxNumber));
    
    if(userNumber == secretNumber){
        alert(`Bravo acertaste!!!, el numero secreto era ${userNumber} lo descubriste en ${attempts} ${attempts == 1 ? 'intento' : 'intentos'}`);
    }else{
        if(userNumber > secretNumber){
            alert('El numero secreto el menor a ' + userNumber);
        }else{
            alert('El numero secreto es mayor a ' + userNumber);
        }
        attempts++;

        if(attempts > maxAttempts){
            alert('Perdiste, llegaste a los ' + maxAttempts + ' intentos sigue jugando, el numero secreto era ' + secretNumber);
            break;
        }

    }
}
