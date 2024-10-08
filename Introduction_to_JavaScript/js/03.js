// Data types

//Undefined
let cliente
//Printing the type
console.log(typeof cliente)

//Strings
const student = 'Alvaro'
console.log(student)
console.log(typeof student)

let product = 'iPhone'
console.log(product)
console.log(typeof product)

// Numbers
const number1 = 20.20
const number2 = 19.9
const number3 = 23.90

console.log(typeof number1)
console.log(typeof number2)
console.log(typeof number3)

// BigInt constructor (big numers)
const number = BigInt(18282882993982939)
console.log(typeof number)

// Boolean (true/false)
const off = true
console.log(typeof off)

// Null (needs to be asigned)
const discount = null
console.log(discount)

// Symbol (each symbol is different to other symbol, you can have the samve value in each symbol but it wont be the same)
const firstSymbol = Symbol(30)
const secondSymbol = Symbol(30)

//(For example if you compare first and second symbol, you can see that the value is the same=30)
console.log(firstSymbol == secondSymbol)
//(it returns false because each Symbol is different) ALWAYS DIFFERENT
