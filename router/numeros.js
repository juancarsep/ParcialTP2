const express = require('express');
const controlador = require('../controller/numeros')

const router = express.Router()

router.post('/entrada',controlador.guardarNumeros);
router.get('/entrada', controlador.obtenerNumeros);
router.get('/promedio', controlador.obtenerPromedio);
router.get('/minmax', controlador.obtenerMinMax);
router.get('/cantidad',controlador.obtenerCantidad);

module.exports = router;