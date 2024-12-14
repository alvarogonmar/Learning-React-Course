// Fetch API with Promises
// Obtener datos a traves de la red

const url = 'https://jsonplaceholder.typicode.com/comments'

// Sin funcion
fetch(url)
    .then((response) =>{
        if(response.ok){
            return response.json()
        }
        throw new Error("Error")
    })
    .then(data => {console.log(data)})
    .catch(error => { // Solo se ejecuta si hay problemas de red y no de la URL
        console.log(error)
    })