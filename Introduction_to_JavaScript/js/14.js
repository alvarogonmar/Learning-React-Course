// Functions Expression: hace "sumar" una variable y no como una funcion
// No funciona si mandas llamar la funcion antes de declararla

const sum = function(num1 = 0, num2 = 0){
    console.log(num1+num2)
}

sum(12+8)