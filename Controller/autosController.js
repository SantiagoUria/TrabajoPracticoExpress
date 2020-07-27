const fs = require('fs');
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))
let autosController ={
 home: (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    concesionarias.forEach(concesionaria=>{
        concesionaria.autos.forEach(auto=>{
            res.write(auto.marca + ' - ' + auto.modelo + ' ~ ' + auto.anio + ' - ')
        })
    })
},
 marca: (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    
        
},
 marcaDato: (req , res) => {
		res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
		let marcaId = req.params.marca;
		let datoId = req.params.dato;

		concesionarias.forEach(concesionaria=>{
			concesionaria.autos.forEach(auto=>{
                if(auto.marca == marcaId){
                    if( datoId == 'anio'){
                        res.write(auto.marca + ' ')
                        res.write(auto.modelo + ' ')
                        res.write(auto.anio + ' ')
                        res.end();
                    }else if(datoId == 'color'){
                        res.write(auto.marca + ' ')
                        res.write(auto.modelo + ' ')
                        res.write(auto.anio + ' ')
                        res.end();
                    }
                    else{
                        res.write(auto.marca + ' ' + auto.modelo + ' ')
                        res.end();
                    }
                }
            else{
            res.write('No encontramos autos de la marca proporcionada');
            res.end();
        }    
    })
})
}
}

module.exports = autosController;