const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./router/appsRoutes"));

app.use("/api/productos", require("./router/appsRoutes"));

app.get("/api/productos/:id", require("./router/appsRoutes"));

app.post("/api/productos", require("./router/appsRoutes"));

app.put("/api/productos/:id", require("./router/appsRoutes"));

app.delete("/api/productos/:id", require("./router/appsRoutes"));

const port = 8080;
app.listen(port, () => {
  console.log("Servidor arriba en el puerto", port);
});
