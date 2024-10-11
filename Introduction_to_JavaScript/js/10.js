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

// ACCESS EACH ELEMENT OF THE ARRAY
// const technologies2 = technologies.filter(function(tech) {
//     console.log(tech)
// })

// PRINT ONLY HTML
const technologies2 = technologies.filter(function(tech) {
    if(tech === 'HTML') {
        return tech
    }
})
console.log(technologies2)