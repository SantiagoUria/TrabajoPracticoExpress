const express = require('express');
const app = express();
const fs = require('fs');

app.listen(3030,  () =>  console.log('Servidor levantado en le puerto 3030'));

const concesionario = JSON.parse(fs.readFileSync(`./data/concesionarias.json`,'utf-8'))

const rutasHome = require('./Routes/home');
const rutasSucursales = require('./Routes/sucursales');
const rutasMarcas = require('./Routes/marcas');
const rutasAutos = require('./Routes/autos');

app.use('/', rutasHome);
app.use('/sucursales', rutasSucursales);
app.use('/sucursales/:id', rutasSucursales);
app.use('/marcas', rutasMarcas);
app.use('/marcas/:marca', rutasMarcas);
app.use('/autos', rutasAutos);
app.use('/autos/:marca', rutasAutos);
app.use('/autos/:marca/:dato?', rutasAutos);