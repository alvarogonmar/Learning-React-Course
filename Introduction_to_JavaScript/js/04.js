// Objects (key and value)
const product1 = {
    name1 : 'TV',
    price2 : 300
}
console.log(product1)
console.log(typeof product1)

//PRINT WITH TABLE
console.table(product1)

// SHOW SPECIFIC INFORMATION
console.log(product1.name1)
console.log(product1.price2)

//DESTRUCTURING
const { name1, price2 } = product1
console.log(name1)
console.log(price2)
