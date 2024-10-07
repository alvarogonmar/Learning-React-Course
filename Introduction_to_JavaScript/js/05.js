// Objects - Manipulation

const product1 = {
    name1 : 'TV',
    price2 : 300,
    stock : false
}

// CANT CHANGE VALUES OF THE OBJECTS WITH FREEZE
// Object.freeze(product1)

Object.seal(product1)

// rewrite a value
product1.stock = true
// Adding a value if it doesnt exist
product1.image = 'imagen.jpg'
// Delete a value
delete product1.price2

console.log(product1)