const express = require("express");
const { controlador } = require("./controllers/controllers.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 8080;

app.get("/", controlador.getInfo);
app.get("/api/productos", controlador.getProductos);
app.get("/api/productos/:id", controlador.getProducto);

app.post("/api/productos", controlador.postInsertar);

app.put("/api/productos/:id", controlador.putActualizar);

app.delete("/api/productos/:id", controlador.delBorrar);

const connectedServer = app.listen(port, () => {
  console.log("Servidor arriba en el puerto", port);
});
