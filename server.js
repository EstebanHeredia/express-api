const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.use("/api/productos", require("./router/appsRoutes"));

const port = 8080;
app.listen(port, () => {
  console.log("Servidor arriba en el puerto", port);
});
