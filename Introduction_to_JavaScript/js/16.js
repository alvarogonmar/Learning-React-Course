// Funciones que retornan valores
const sum = function(num1 = 0, num2 = 0){
    return num1+num2
}


// ARROW FUNCTIONS NO NECESITA RETURN
const sum2 = (num1 = 0, num2 = 0)=> num1+num2

// function sum(x,y) { // Parametros
//     return x+y
// }

const result = sum(12+8) // Asignar variable al return
const result2 = sum2(12+10) // Asignar variable al return
console.log(result) // mostrarlo