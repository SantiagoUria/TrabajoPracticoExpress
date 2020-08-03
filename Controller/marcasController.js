let database = require('../database');
let marcasController ={
    home : (req, res) => {
        res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
        let i = 0
    let arrayMarcas = [];
    res.write('Las marcas con las que trabajamos: <br/>')
    res.write('--------------------------------------------<br/>')
    database.forEach(concesionaria => {
        concesionaria.autos.forEach(auto =>{
        arrayMarcas.push(auto.marca);
    });      
    });
    let marcasSingular = Array.from(new Set(arrayMarcas))
    marcasSingular.forEach(marca=>{
    res.write('║ ' + marca + '.║<br/>')
    })
    res.end()
},
 marca : (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    res.write('Estos son los modelos que coinciden con su busqueda: <br/>')
    res.write('----------------------------------------------------------------------------------------------------------------------------<br/>')
    database.forEach(concesionaria => {
    let arrayDatos = [];
    let concesionariaNombre = concesionaria.sucursal
    concesionaria.autos.forEach(auto=>{
        if(req.params.marca.toLowerCase() == auto.marca.toLowerCase())
        {
            arrayDatos.push(auto.marca, auto.modelo, auto.color, auto.anio)
            res.write("║Marca: " + arrayDatos[0] + "║ ║Modelo: " + arrayDatos[1] + ".║ ║Color: " + arrayDatos[2] + ".║ ║Año. " + arrayDatos[3] + ".║ En la sucursal: " + concesionariaNombre + '.<br/>')
        };
    })
    });
res.end();        
}
};

module.exports = marcasController;