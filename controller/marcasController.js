const fs = require("fs");
let dbConcesionarias = JSON.parse(fs.readFileSync ("./data/concesionarias.json", "utf-8"))

const marcass = {
    index: function(req, res){
           res.set({"content-type" : "text/plain ; charset-utf-8"})
           res.write("--------------------------------------\n\n")
           res.write("Automotores DIGITAL HOUSE - FORMAR\n\n")
           res.write("--------------------------------------\n\n")
           res.write("Nuestras Marcas\n")
           res.write("--------------------------------------\n\n")
      
        let miArray = ["- Volkswagen", "- Peugeot", "- Chevrolet", "- Nissan", "- Renault", "- Audi", "- Fiat", "- Ford", "- Toyota", "- Citroen", "- Chery", "- Honda"]
        miArray.forEach(marcas => {
            res.write(marcas + "\n")
        });
        res.end()
    },
    detalle: function(req, res){
        let idMarca = req.params.id
        res.set({"content-type" : "text/plain ; charset-utf-8"})
        res.write("--------------------------------------\n\n")
        res.write("Automotores DIGITAL HOUSE - FORMAR\n\n")
        res.write("--------------------------------------\n\n")
        res.write("Nuestros Vehiculos\n")
        res.write("--------------------------------------\n\n")
        dbConcesionarias.forEach((concesionarias)=>{
         concesionarias.autos.forEach((auto)=>{   
            if(auto.marca == idMarca){

                res.write(auto.marca + " - "+ auto.modelo + " - " + auto.anio + "\n")
                

            }
         })
        })

       res.end()
    }
}


module.exports = marcass

