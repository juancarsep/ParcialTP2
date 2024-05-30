const servicio = require('../service/numeros.js')

const guardarNumeros = (req, res) => {
    const { numero } = req.body.numero;
    console.log(numero);
    if (typeof numero === 'number') {
        servicio.guardarNumero(numero);
        res.send(numero);
    }else{
        res.send('ERROR, solo se aceptan numeros')
    }

}

const obtenerNumeros = (req, res) => {    
    const numeros = servicio.obtenerNumeros();
    res.json({ "Numeros": numeros });
}

const obtenerPromedio = (req, res) => {
    const promedio = servicio.obtenerPromedio()
    res.json({ "Promedio": promedio });
}

const obtenerMinMax = (req, res) => {
    let minMax = servicio.obtenerMinMax();
    let min = minMax[0];
    let max = minMax[1]
    res.json({ "min": min, "max": max });
}

const obtenerCantidad = (req, res) => {
    const cantidad = servicio.obtenerCantidad();
    res.json({ "cantidad": cantidad })
}

module.exports = {
    guardarNumeros,
    obtenerNumeros,
    obtenerPromedio,
    obtenerMinMax,
    obtenerCantidad
}