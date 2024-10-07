const technologies = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
// REPLACE A VALUE THAT ALREADY EXIST
// technologies[4] = 'Nest.js'
// ADDING A VALUE
// technologies[5] = 'Nest.js'

// ADD A VALUE AT THE END
// technologies.push('Nest.js')

// ADD A VALUE AT THE END (BETTER TO USE WITH REACT)
const newArray = [...technologies, 'Nest.js']
console.table(technologies)

console.table(newArray)