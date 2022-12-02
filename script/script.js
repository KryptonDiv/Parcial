function ordenarArregloDeObjetosPorParametro(arreglo, parametro) {
    const parametrosValidos = Object.keys(arreglo[0])
    if (parametrosValidos.includes(parametro)) {
        if (typeof arreglo[0][parametro] === "number") {
            return arreglo.sort((a, b) => a[parametro] - b[parametro])
        } else {
            return arreglo.sort((a, b) => a[parametro].localeCompare(b[parametro]))
        }
    } else {
        console.log(`Por favor utilice uno de los parametros validos: ${parametrosValidos.join(' - ')}`)
    }
}
