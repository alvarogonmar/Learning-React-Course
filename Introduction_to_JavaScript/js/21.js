// Ternarios
const auth = true
const balance = 1000
const pay = 1200
const target = true

/** if(auth){
    console.log("Authenticated user")
} else{
    console.log("Not authenticated, login")
} */

// Revisar si el usuario esta autenticado
// Sintaxis:
// condicion - lo que se ejecuta - : - lo que se ejecuta si no se cumple

auth ? console.log("Authenticated user") : console.log("Not authenticated, login")

balance > pay ? 
    console.log("You can pay") :
    console.log("You cant pay")

// Ternarios anidados
balance > pay ? 
    console.log("You can pay") :
    target ?
        console.log("You can pay with the target") :
        console.log("You cant pay")

// Codigo de arriba pero mas facil con Or
balance > pay || target ? 
    console.log("You can pay") :
    console.log("You cant pay")