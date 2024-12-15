// Performance and Multiple Async Await
const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/todos'
const url3= 'https://jsonplaceholder.typicode.com/photos'

const consularAPI = async () => {
    try { // siempre usar un try catch
        const start = performance.now()

        const response = await fetch(url) // Esperar una respuesta
        const data = await response.json() // Retornar la respuesta como json
        console.log(data)

        const response2 = await fetch(url2) // Esperar una respuesta
        const data2 = await response2.json() // Retornar la respuesta como json
        console.log(data2)

        const response3 = await fetch(url3) // Esperar una respuesta
        const data3 = await response3.json() // Retornar la respuesta como json
        console.log(data3)
        
        const end = performance.now()

        console.log(`The result is: ${end - start} ms`)
    } catch (error) {
        console.log(error.message)
    }
}
consularAPI()

const consultarAPI2 = async () => {
    try { // siempre usar un try catch
        const start = performance.now()

        const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)]) // Empezar todos los fetch al mismo tiempo
        const [data, data2, data3] = await Promise.all([response.json(), response2.json(),response3.json()])
       
        console.log(data) 
        console.log(data2) 
        console.log(data3)
        
        const end = performance.now()

        console.log(`The result 2 is: ${end - start} ms`)
    } catch (error) {
        console.log(error.message)
    }
}
consultarAPI2()