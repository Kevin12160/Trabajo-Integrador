const fs = require("fs");
let dbConcesionarias = JSON.parse(fs.readFileSync ("./data/concesionarias.json", "utf-8"))

const sucursales = {

    index : function(req, res){
      res.set({"content-type" : "text/plain ; charset-utf-8"})

        res.write("--------------------------------------\n\n")
        res.write("Nuestras sucursales\n\n")
        res.write("--------------------------------------\n\n")

        dbConcesionarias.forEach((concesionarias)=>{
            res.write("Sucursal: " + concesionarias.sucursal + "\n\n")
            res.write("Direccion: "+ concesionarias.direccion + "\n")
            res.write("Telefono:" + concesionarias.telefono + "\n\n")
        })
        res.end()
    },
    detalle : function(req , res){
        res.set({"content-type" : "text/plain ; charset-utf-8"})
        let idSucursal = req.params.id
        res.write("--------------------------------------\n\n")
        res.write("Automotores DIGITAL HOUSE - FORMAR\n\n")
        res.write("--------------------------------------\n")
        dbConcesionarias.forEach((concesionarias)=>{
            if(concesionarias.sucursal == idSucursal){

                res.write("Sucursal: " + concesionarias.sucursal + "\n")
                res.write("--------------------------------------\n\n")
                res.write("Direccion: " + concesionarias.direccion + "\n")
                res.write("Telefono: " + concesionarias.telefono + "\n\n")
                res.write("--------------------------------------\n")
                    res.write("            VEHICULOS\n")
                    res.write("--------------------------------------\n\n")

                concesionarias.autos.forEach((auto)=>{
                res.write(  "  -" + auto.marca +"  " + auto.modelo + "  año " + auto.anio + "\n\n")
            
            })

        }
    })
        res.end("No se encontro la Sucursal que buscabas")
    }
}
module.exports = sucursales;
