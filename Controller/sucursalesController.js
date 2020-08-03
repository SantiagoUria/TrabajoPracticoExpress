let database = require('../database');
let sucursalesController ={
 home : (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
      database.forEach( concesionaria => {
        res.write('║Nombre: ' + concesionaria.sucursal + '.║ ║Dirección: ' + concesionaria.direccion + '.║ ║Teléfono: ' + concesionaria.telefono + '║ <br/><br/>');
    })
res.end();
},


sucursal: (req, res) => {
    let sucursalId = req.params.id;
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});


    database.forEach(concesionaria=>{
    if (concesionaria.sucursal.toLowerCase()  == sucursalId.toLowerCase()){
        res.write('║Nombre: ' + concesionaria.sucursal + '.║ ║Dirección: ' + concesionaria.direccion + '.║ ║Teléfono: ' + concesionaria.telefono + '║ <br/><br/>');

        let i= 0
        concesionaria.autos.forEach(auto=>{
            res.write('║Marca: ' + auto.marca + '.║ ║Modelo: ' + auto.modelo + '.║ ║Año: ' + auto.anio + '.║ ║Color: ' + auto.color + '.║<br/>')
            i++
            return
        })
        res.end('Cantidad de autos disponibles: ║ ' + i + ' ║')
    }
})
res.end('No tenemos sucursal con esa ID')
}
}

module.exports = sucursalesController;