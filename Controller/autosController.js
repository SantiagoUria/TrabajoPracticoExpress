let database = require('../database');
let autosController ={
 home: (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    database.forEach(concesionaria=>{
        concesionaria.autos.forEach(auto=>{
            res.write('║Marca: ' + auto.marca + '.║ ║Modelo: ' + auto.modelo + '.║ ║Año: ' + auto.anio + '.║ ║Color: ' + auto.color + '.║<br/>')
        })
    }); res.end()
},
 marca: (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
      let marcaId = req.params.marca;

		database.forEach(concesionaria=>{
			concesionaria.autos.forEach(auto=>{
                if(auto.marca == req.params.marca){
                    res.write('║Marca: ' + auto.marca + '.║ ║Modelo: ' + auto.modelo + '.║ ║Año: ' + auto.anio + '.║ ║Color: ' + auto.color + '.║<br/>')
                    
            }});
          })
        res.end()
      },
 marcaDato: (req , res) => {
		res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
        let marcaId = req.params.marca;
        let datoId = req.params.dato;
        let arrayDatos = []

		database.forEach(concesionaria=>{
			concesionaria.autos.forEach(auto=>{
                
                if(auto.marca == marcaId && auto.color == datoId || auto.anio == datoId) {
                    arrayDatos.push(auto.marca, auto.modelo, auto.color, auto.anio)
                    res.write("║Marca: " + arrayDatos[0] + "║ ║Modelo: " + arrayDatos[1] + ".║ ║Color: " + arrayDatos[2] + ".║ ║Año. " + arrayDatos[3] + ".║<br/>")
                };
                
            })
            
        });res.end()
    }
}

module.exports = autosController;