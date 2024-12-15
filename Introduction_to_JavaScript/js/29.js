// Manipular elementos HTML con JS

const heading = document.querySelector(".heading")
const links = document.querySelectorAll(".navigation a")
heading.textContent = "New Heading" // Ponerle un nuevo heading

heading.removeAttribute("class") // Quitarle el atributo 

// const inputName = document.querySelector("#name")
// inputName.value = "New Name..."

// Al usar querySelectorAll tengo que ponerle la posicion [i] para poder manipularlos
links[0].textContent = "New Link"