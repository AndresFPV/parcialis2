
// Funcion a decorar
let pintar = (nombre : string, apellido : string) => {
    return `{nombre: '${nombre}', apellido: '${apellido}'}`
}

let funcionDecoradora = (f: Function) => {
    let funcionYaDecorada = (nombre : string, apellido : string) =>{
        let resp = f(nombre, apellido)
        return resp.toUpperCase()
    }
    return funcionYaDecorada
}

let funcionDecorada = funcionDecoradora(pintar)

console.log(funcionDecorada("Aron", "Lo"))
console.log(funcionDecorada("Billy", "Grados"))