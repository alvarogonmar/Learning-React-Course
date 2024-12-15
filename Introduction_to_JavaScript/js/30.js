// Eventos del DOM - Clicks
const heading = document.querySelector(".heading")
const links = document.querySelectorAll(".navigation a")

// heading.addEventListener("click", () => {
//     heading.textContent = "New Heading Click"
// })

links.forEach( link => {
    link.addEventListener("click", (e) => {
        e.preventDefault()
        e.target.textContent = "Diste click..."
    })
})