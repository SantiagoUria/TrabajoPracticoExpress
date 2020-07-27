const fs = require('fs');
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))
let homeController ={
 home: (req, res, a) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
     res.write('Bienvenido a nuestra homepage, nuestras sucursales son: ' )
    concesionarias.forEach( concesionarias => {
        res.write( concesionarias.sucursal + ' ')
    });
res.end();
}
};

module.exports = homeController;