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