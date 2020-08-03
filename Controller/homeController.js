let database = require('../database');
let homeController ={
 home: (req, res, a) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
     res.write('Bienvenido a nuestra homepage, nuestras sucursales son: <br/>' )
     res.write(  ' =====================================<br/> ')
     database.forEach( concesionarias => {
         res.write( '║' + concesionarias.sucursal )
         
        });
        res.write(  '║<br/>')
    res.write(  ' =====================================<br/> ')
res.end();
}
};

module.exports = homeController;