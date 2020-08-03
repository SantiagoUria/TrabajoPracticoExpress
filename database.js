const fs = require('fs');
let database = JSON.parse(fs.readFileSync(__dirname + '/Data/concesionarias.json','utf-8'))
module.exports = database;