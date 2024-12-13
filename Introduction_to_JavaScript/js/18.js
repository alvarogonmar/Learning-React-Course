// Conditionals
const available = 4000
const withdraw = 200

const auth = true

/* if(auth){
    // Se cumple la condicion
    console.log("Accessing the system...")
} else{
    // No se cumple la condicion
    console.log("You don't have permission")
} */


if(available >= withdraw){
    console.log("withdrawal made successfully")
} else{
    console.log("Insufficient balance")
}

/**
 * > Mayor que
 * < Menor que
 * >= Mayor o igual
 * <= Menor o igual
 * == Igual
 * === Igual estricto
 * !== Diferente a
 */