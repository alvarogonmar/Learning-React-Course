// Eventos del DOM - Submit

const form = document.querySelector("#form")
form.addEventListener("submit", e => {
    e.preventDefault() // para que no de el salto

    const name = document.querySelector("#name").value
    const password = document.querySelector("#password").value


    if(name === "" || password === ""){
        console.log("All fields are required")
    } else {
        console.log("Login...")
    }
    // console.log(name.value)
    // console.log(password.value)
    // console.log("Sending form...")
})