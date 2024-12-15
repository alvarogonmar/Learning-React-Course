// Selectores

// Siempre iniciar con "document"
/** const heading = document.querySelector(".heading")

console.log(heading)
console.log(heading.tagName) // Retorna por ejemplo "H1"
console.log(heading.textContent) // Retorna el texto del H1
console.log(heading.classList) // Retorna las clases que hay */


const links = document.querySelectorAll(".navigation a") // Si uso solo querySelector solo me va a extraer 1 enlace, y con querySelectorAll extrae todos
console.log(links)