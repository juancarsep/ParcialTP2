const numeros = [1, 2, 3, 4, 5, 6, 7]

const obtenerNumeros = () => numeros;
const guardarNumero = numero => {
    numeros.push(numero);
}


module.exports = {
    obtenerNumeros,
    guardarNumero
}
