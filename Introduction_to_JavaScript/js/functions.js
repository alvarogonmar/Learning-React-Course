export function sum(n1, n2){
    return n1 + n2
}
// agregar el export, para permitirle importar esas funciones en otros archivos
export function res(n1, n2){
    return n1 - n2
}

// o tambien puede ser:
// export {
//     sum,
//     res
// }