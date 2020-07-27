const fs = require('fs');
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))
let autosController ={
 home: (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    concesionarias.forEach(concesionaria=>{
        concesionaria.autos.forEach(auto=>{
            res.write(auto.marca + ' - ' + auto.modelo + ' ~ ' + auto.anio + ' - ')
        })
    }); res.end()
},
 marca: (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
      let marcaId = req.params.marca;

		concesionarias.forEach(concesionaria=>{
			concesionaria.autos.forEach(auto=>{
                if(auto.marca == req.params.marca){
                        res.write(auto.marca + ' ')
                        res.write(auto.modelo + ' ')
                        res.write(auto.anio + ' ---- ')
                    
            }});
          }); res.end();
      },
 marcaDato: (req , res) => {
		res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
        let datoId = req.params.dato;
        let marcaId = req.params.marca;

		concesionarias.forEach(concesionaria=>{
			concesionaria.autos.forEach(auto=>{
                if(auto.marca == marcaId){
                    if( datoId == 'color'){
                        res.write(auto.marca + ' ')
                        res.write(auto.modelo + ' ')
                        res.write(auto.color + ' ---- ')
                    } if(datoId == 'color'){
                        res.write(auto.marca + ' ')
                        res.write(auto.modelo + ' ')
                        res.write(auto.anio + ' ---- ')
                    }
                    
                     if(datoId !='anio' && datoId !='color'){
                        res.write('las características que ingresó no son compatibles');
                        res.end();
                    }
                }   
                if(auto.marca != marcaId){
                    res.write('la marca que ingresó no tiene existencias en nuestras sucursales')
                    res.end();
                }
});
}); res.end();
}
};

module.exports = autosController;