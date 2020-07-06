const fs = require("fs");
let dbConcesionarias = JSON.parse(fs.readFileSync ("./data/concesionarias.json", "utf-8"))

const home = {

    index : function(req, res){
        res.set ({"content-type" : "text/plain ; charset-utf-8"})
        res.write("--------------------------------------\n\n")
            res.write("BIENVENIDOS A AUTOMOTORES DH \n\n")
            res.write("--------------------------------------\n\n")
            res.write("Nuestras sucursales\n\n")
            res.write("--------------------------------------\n\n")
        dbConcesionarias.forEach((concesionaria)=>{
            res.write(" * " + concesionaria.sucursal + "\n\n")
        })
        res.end()
    }
}

module.exports = home;