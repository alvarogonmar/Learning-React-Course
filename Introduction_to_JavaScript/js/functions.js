// export function sum(n1, n2){
//     return n1 + n2
// }
// // agregar el export, para permitirle importar esas funciones en otros archivos
// export function res(n1, n2){
//     return n1 - n2
// }

// // o tambien puede ser:
// // export {
// //     sum,
// //     res
// // }


// // Export default: solo puede haber uno por archivo, puedes nombrarlo como quieras y no debes ponerlo entre las llaves{}
// export default function mult(n1, n2){
//     return n1*n2
// }

// Converit el codigo a arrow functions:
 export const sum = (n1, n2) => n1 + n2
 
 export const res = (n1, n2) => n1 - n2
 
const mult = (n1, n2) => n1*n2

export const division = (n1,n2) => n1/n2

export default mult