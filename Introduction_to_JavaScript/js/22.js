// Optional cahining (?)
const student = {
    name: "Juan",
    class: "JavaScript Class",
    approved: true,
    exams: {
        test1: 90
    }

}

console.log(student.exams?.test1) // Revisa si una propiedad existe, ejemplo examenes?, si no existe el codigo que sigue
// se sigue ejecutando, si no tuviera el '?' ahi da error y ya no se ejecuta lo que sigue del codigo 

console.log("After")

// Nullish coalescing operator (??): retorna el valor del lado derecho, cuando el valor del lado derecho es nulo o viceversa
const pag = null ?? 1
console.log(pag)