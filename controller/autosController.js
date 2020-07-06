
const fs = require("fs");
let dbConcesionarias = JSON.parse(fs.readFileSync ("./data/concesionarias.json", "utf-8"))
const listaDeAutos = {
    index: function(req, res){
           res.set({"content-type" : "text/plain ; charset-utf-8"})
           res.write("---------------------------------------------\n\n")
           res.write("Automotores DIGITAL HOUSE - FORMAR\n\n")
           res.write("---------------------------------------------\n\n")
           res.write("    Estos son Todos Nuestos Vehiculos\n")
           res.write("---------------------------------------------\n\n")
           dbConcesionarias.forEach((concesionarias)=>{
            concesionarias.autos.forEach((auto)=>{   
                res.write("   - " + auto.marca + " - "+ auto.modelo + " - " + auto.anio + " - " + auto.color + "\n")

            })
        })
        res.end()
    },
    detalle: function(req, res){
        res.set({"content-type" : "text/plain ; charset-utf-8"})
        let idListaDeAutos = req.params.id
        res.write("--------------------------------------\n\n")
        res.write("Automotores DIGITAL HOUSE - FORMAR\n\n")
        res.write("--------------------------------------\n\n")
        dbConcesionarias.forEach((concesionarias)=>{
            concesionarias.autos.forEach((auto)=>{
                if(auto.marca == idListaDeAutos){
    
                    res.write("   - MARCA: " + auto.marca + " - MODELO: "+ auto.modelo + " - AÑO: " + auto.anio + " - COLOR: " + auto.color + " - SUCURSAL: " + concesionarias.sucursal + "\n") 



                  }
                })
                
            })
            res.end()
    },

    PorAño: function(req,res){
        res.set({"content-type" : "text/plain ; charset-utf-8"})
        let idListaDeAutos = req.params.id
        let dato = req.params.dato
        res.write("--------------------------------------\n\n")
        res.write("Automotores DIGITAL HOUSE - FORMAR\n\n")
        res.write("--------------------------------------\n\n")
        dbConcesionarias.forEach((concesionarias)=>{
            concesionarias.autos.forEach((auto)=>{
                if(auto.marca == idListaDeAutos){
                     if(auto.anio == dato){

                    res.write("   - MARCA: " + auto.marca + " - MODELO: "+ auto.modelo + " - AÑO: " + auto.anio + " - COLOR: " + auto.color + " - SUCURSAL: " +concesionarias.sucursal + "\n")
                    
                }
    
            }
         
        })

      })
      res.end()
    }
}
        
module.exports = listaDeAutos;
