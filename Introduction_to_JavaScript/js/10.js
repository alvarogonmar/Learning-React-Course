const technologies = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
// REPLACE A VALUE THAT ALREADY EXIST
// technologies[4] = 'Nest.js'
// ADDING A VALUE
// technologies[5] = 'Nest.js'

// ADD A VALUE AT THE END
// technologies.push('Nest.js')

// ADD A VALUE AT THE END (BETTER TO USE WITH REACT)
// const newArray = [...technologies, 'Nest.js']
// console.table(newArray)

// DELETE A VALUE
// technologies.shift()
// console.table(technologies)

// ACCESS EACH ELEMENT OF THE ARRAY filter(no mutation)
// const technologies2 = technologies.filter(function(tech) {
//     console.log(tech)
// })

// PRINT ONLY HTML
// const technologies2 = technologies.filter(function(tech) {
//     if(tech === 'HTML') {
//         return tech
//     }
// })
// console.log(technologies2)

// PRINT ALL ELEMENTS EXCEPT HTML USING !==
// const technologies2 = technologies.filter(function(tech) {
//     if(tech !== 'HTML') {
//         return tech
//     }
// })
// console.log(technologies2)

// ACCESS EACH ELEMENT OF THE ARRAY AND MODIFY IT (more recommended)
const technologies2 = technologies.map(function(tech) {
    if(tech === 'Node.js') {
        return 'Nest.js' 
    } else {
        return tech // RETURNING ALL THE ELEMENTS OF THE ARRAY
    }
})
console.log(technologies2)