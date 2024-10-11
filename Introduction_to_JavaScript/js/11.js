const technologies = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']

const react = technologies[3]
// DESTRUCTURING ARRAYS
// EXTRACT THE POSITION AND PRINT IT
const [html, css, nodejs] = technologies

// FOR EXAMPLE HERE I HAVE CSS, POSITION [1], and PRINT 'CSS' position [1] of THE ARRAY
console.log(css)

// IF I HAD nodejs IN POSITION [2], ITS gonna PRINT 'JavaScript' BECAUSE IS IN THE POSITION [2]
console.log(nodejs)

// IF I WANT to PRINT ONLY 'React.js':
const [ , , , reactjs] = technologies // USING COMMAS IN THE BLANK SPACE (THERE WOULD BE THE VARIABLE)
console.log(reactjs)

// but this is correct too:
const react2 = technologies[3]
console.log(react2)