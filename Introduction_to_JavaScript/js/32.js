// Eventos del DOM - Submit

const form = document.querySelector("#form")
form.addEventListener("submit", e => {
    e.preventDefault() // para que no de el salto

    const name = document.querySelector("#name").value
    const password = document.querySelector("#password").value

    // Prevenir nuevas alertas
    const advanceAlert = document.querySelector(".alert")
    advanceAlert?.remove()

    const alert = document.createElement("DIV") // creatElement sirve para generar elementos HTML con codigo de JS
    alert.textContent = "Alert Content"
    alert.classList.add("alert", "text-white", "uppercase", "text-sm", "text-center", "p-2", "font-black") // Ponerle classes al div
    

    if(name === "" || password === ""){
        alert.textContent = "All the fields are required"
        alert.classList.add("bg-red-500")
    } else {
        alert.textContent = "Login..."
        alert.classList.add("bg-green-500")

    }

    form.appendChild(alert) // Agregarselo como hijo del formulario

    setTimeout(() => { // Borrarla de la pagina despues de 2s
        alert.remove()
    }, 2000);
    // console.log(name.value)
    // console.log(password.value)
    // console.log("Sending form...")
})