const technologies = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']


// PRINT ALL THE ELEMENTS IN THE ARRAY, USING LENGTH TO KNOW HOW MANY ELEMENTS ARE IN THE ARRAY.
// for(let i = 0; i < technologies.length; i ++) {
//     console.log(technologies[i])
// }

// forEach : knows how many elements are in the array and executes those times
// print the quantity of the elements in the array
// technologies.forEach(function() {
//     console.log('From the function')
// })

// PRINT THE ELEMENTS IN THE ARRAY  
technologies.forEach(function(tech) {
    console.log(tech)
})