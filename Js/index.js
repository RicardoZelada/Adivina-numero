/* Declaracion de Variables */
let secretNumber = Math.floor(Math.random()*10)+1;
let userNumber = 0;
let attempts = 1;
let maxAttempts = 3;

while (userNumber != secretNumber){
    userNumber = parseInt(prompt('Ingresa un numero entre el 1 y 10'));
    
    if(userNumber == secretNumber){
        alert('Acertaste, el numero secreto');
    }else{
        if(userNumber > secretNumber){
            alert('El numero secreto el menor');
        }else{
            alert('El numero secreto es mayor');
        }
        attempts++;

        if(attempts > maxAttempts){
            alert('Llegaste al maximo de intentos');
            break;
        }

    }
}
