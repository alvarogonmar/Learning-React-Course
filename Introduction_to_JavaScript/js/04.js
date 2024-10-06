// Objects (key and value)
const product1 = {
    name : 'TV',
    price : 300,
    stock : false
}
console.log(product1)
console.log(typeof product1)

//PRINT WITH TABLE
console.table(product1)

// SHOW SPECIFIC INFORMATION
console.log(product1.name)
console.log(product1.price)

//DESTRUCTURING
const { name, price, stock } = product1
console.log(name)
console.log(price)
console.log(stock)

//This does the same as the code above but is longer.
//const name = product1.name
//const price = product1.price
//const stock = product1.stock
//console.log(name)
//console.log(price)
//console.log(stock)
