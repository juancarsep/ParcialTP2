const model = require('../model/numeros')

const guardarNumero = numero => {
    model.guardarNumero(numero);
}

const obtenerNumeros = () => {
    const numeros = model.obtenerNumeros();
    return numeros;
}

const obtenerPromedio = () => {
    const numeros = model.obtenerNumeros();
    let suma = 0;
    numeros.forEach(element => {
        suma += element;
    });
    let total = obtenerCantidad();

    let promedio = suma / total;
    return promedio;
}

const obtenerMinMax = () => {
    const numeros = model.obtenerNumeros()
    const min = Math.min(...numeros);
    const max = Math.max(...numeros);
    return [min, max];
}

const obtenerCantidad = () => {
    const numeros = model.obtenerNumeros();
    const cantidad = numeros.length;
    return cantidad;
}

module.exports = {
    obtenerNumeros,
    guardarNumero,
    obtenerPromedio,
    obtenerMinMax,
    obtenerCantidad
}