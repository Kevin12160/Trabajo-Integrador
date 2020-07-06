const express = require("express");
const app = express();

const routeAutos = require("./routes/autos");
const routeHome = require("./routes/home");
const routeMarcas = require("./routes/marcas");
const routeSucursales = require("./routes/sucursales");



app.listen(3030, () => console.log("El servidor esta levantado en el puerto 3030"));


app.use("/", routeHome)
app.use("/sucursales", routeSucursales)
app.use("/marcas", routeMarcas)
app.use("/autos" , routeAutos)