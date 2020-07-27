const fs = require('fs');
const { kMaxLength } = require('buffer');
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));
let marcasController ={
    home : (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    concesionarias.forEach(concesionaria=>{
           for (let i = 0; i > array.length; i++) {
               const arrayMarcas = arrayMarcas.push(concesionaria.autos[i])
               
               return res.write(arrayMarcas);
           }
    }); res.end();
        
},
 marca : (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
   
res.send();
res.end();        
}
};

module.exports = marcasController