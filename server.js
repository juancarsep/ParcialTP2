const express = require('express');
const router = require('./router/numeros')
const app = express();
app.use(express.json());
app.use('/numeros', router)
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
server.on('error', error => console.log(`Error en el servidor: ${error.message}`))