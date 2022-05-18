const express = require("express");
const router = express.Router();
const { controlador } = require("../controllers/controllers");

// Listar información API
router.get("/", controlador.getInfo);
// Devolver productos
router.get("/api/productos", controlador.getProductos);
// Devolver productos por ID
router.get("/api/productos/:id", controlador.getProducto);
// Insertar productos
router.post("/api/productos", controlador.postInsertar);
// Actualizar productos
router.put("/api/productos/:id", controlador.putActualizar);
// Borrar productos
router.delete("/api/productos/:id", controlador.delBorrar);

module.exports = router;
