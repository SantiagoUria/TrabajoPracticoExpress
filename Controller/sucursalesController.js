const fs = require('fs');
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));
let sucursalesController ={
 home : (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
      concesionarias.forEach( concesionarias => {
        res.write( concesionarias.sucursal + ', ' + concesionarias.direccion + ', ' + concesionarias.telefono + ' - ');
    })
res.end();
},


sucursal: (req, res) => {
    let sucursalId = req.params.id;
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});


    concesionarias.forEach(concesionaria=>{
    if (concesionaria.sucursal.toLowerCase()  == sucursalId.toLowerCase()){
        res.write(concesionaria.sucursal + ' ');
        res.write(concesionaria.direccion + ' ');
        res.write(concesionaria.telefono + ' ');

        concesionaria.autos.forEach(auto=>{
            res.write(auto.marca + ' - ' + auto.modelo + ' ~ ' + auto.anio + ' - ')
        })
        res.end('cantidad de autos disponibles: ' + concesionaria.autos.lenght)
    }
})
res.end('No tenemos sucursal con esa ID')
}

}

module.exports = sucursalesController;