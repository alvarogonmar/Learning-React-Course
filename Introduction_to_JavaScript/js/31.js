// Eventos del DOM - Inputs

const inputName = document.querySelector("#name")
inputName.addEventListener("input", (e) => {
    console.log(e.target.value)
})

const inputPassword = document.querySelector("#password")
inputPassword.addEventListener("input", functionPassword)

function functionPassword() {
    inputPassword.type = "text" // convertir el password a texto y que se muestre

    setTimeout(() => { // volver a convertirlo a password despues de 0.3s
        inputPassword.type = "password"
    }, 300); // en ms
}