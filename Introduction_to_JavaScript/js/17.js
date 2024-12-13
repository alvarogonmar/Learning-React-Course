const technologies = ["HTML", "CSS", "JavaScript", "React,js", "Node.js"]
const numbers = [10, 20, 30]

// Filter: sacar un elemento del arreglo

// const newArray = technologies.filter(function(tech) {
//     console.log(tech)
// })


// Another way
const newArray = technologies.filter((tech) => console.log(tech))
const newArray2 = technologies.filter((tech) => tech === "HTML") // Sacar HTML
const newArray3 = technologies.filter((tech) => tech !== "HTML") // Sacar diferentes a HTML

console.log(newArray2)
console.log(newArray3)

const result3 = numbers.filter(number => number !==10)
console.log(result3)

// Includes
const result4 = technologies.includes("CSS")
console.log(result4) // true

// Some - devuelve si al menos uno cumple la condicion
const result5 = numbers.some(number => number > 15)
if(result5){
    console.log("There are elements")
} else{
    console.log("There aren't elements")
}
console.log(result5)

// Find - Devuelve el primer elemento que cumple una condicion
const result6 = numbers.find(number => number >15)
console.log(result6)

// Every - Retorna true o false si todos cumplen la condicion
const result7 = numbers.every(number => number >5)
console.log(result7)

// Reduce - Retorna un acumulado del total
const result8 = numbers.reduce((total, number) => {
    console.log(total)
    console.log(number)

    return total + number
}, 0)
console.log(result8)
