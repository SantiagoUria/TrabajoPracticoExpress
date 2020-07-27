const fs = require('fs');
const { kMaxLength } = require('buffer');
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));
let marcasController ={
    home : (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    res.write('todas las marcas sin repetirlas')
        
},
 marca : (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
   
res.send();
res.end();        
}
};

module.exports = marcasController