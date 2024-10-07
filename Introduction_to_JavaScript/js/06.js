// Objects - Destructuring 2 or more objects

const product1 = {
    name1 : 'TV',
    price2 : 300,
    stock : false
}

const customer1 = {
    name1 : 'Alvaro',
    premium : true,
    direction: {
        street: 'Av. Aviacion'
    }
}

const {name1} = product1
// RENAME THE VARIABLE
const {name1: name1Customer, 
    // entering the object
    direction: {street}} = customer1

console.log(name1)
console.log(name1Customer)

console.log(street)