// Function Declaration
// Funciona si mandas la llamar antes o despues de la funcion
function sum(x,y) { // Parametros
    console.log( x + y )
}

sum(10,20) // Argumentos

function sum2(num1 = 0, num2 = 0){
    console.log(num1)
    console.log(num2)
    console.log(num1+num2)
}

sum2()