const number1 = 20
const number2 = "20"

/**
 *  == (comparador no estricto)
 *  === (comparador estricto)
 */

// == Comparador NO estricto revisa solo si es igual el valor
if(number1==number2){
    console.log("Yes, they are the same")
} else{
    console.log("No, they arent the same")
}

// Comparador estricto revisa si el valor es igual y ADEMAS EL TIPO DE DATO
if(number1===number2){
    console.log("Yes, they are the same")
} else{
    console.log("No, they arent the same")
}