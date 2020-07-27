let marcasController ={
 home : (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    res.send('mostrar marcas una de cada una');
},
 marca :(req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});

    res.send('todos los autos que pertenezcan a una marca, mostrar marca, modelo y año');
}
};

module.exports = marcasController;