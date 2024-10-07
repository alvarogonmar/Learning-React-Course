// Objects - Destructuring 2 or more objects

const product1 = {
    name1 : 'TV',
    price2 : 300,
    stock : false
}

const customer1 = {
    name1 : 'Alvaro',
    premium : true
}

// const shopping_car = {
//     amount : 1,
//     ...product1 // spread operator (...)
// }
// console.log(shopping_car)

// uniting everything in a single object
const newObject = {
    ...product1,
    // another way
    ...customer1
}
console.log(newObject)

// The same as above but less code
const newObject2 = Object.assign(product1,customer1)
console.log(newObject2)