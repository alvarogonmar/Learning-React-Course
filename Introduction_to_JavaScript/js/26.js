// Fetch API with Async / Await
// Obtener datos a traves de la red, requiere una funcion

const url = 'https://jsonplaceholder.typicode.com/comments'


// Sin funcion
// fetch(url)
//     .then((response) =>{
//         if(response.ok){
//             return response.json()
//         }
//         throw new Error("Error")
//     })
//     .then(data => {console.log(data)})
//     .catch(error => { // Solo se ejecuta si hay problemas de red y no de la URL
//         console.log(error)
//     })


const consularAPI = async () => {
    try { // siempre usar un try catch
        const response = await fetch(url) // Esperar una respuesta
        if(!response.ok){
            throw new Error("Error")
        }
        const data = await response.json() // Retornar la respuesta como json
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}
consularAPI()