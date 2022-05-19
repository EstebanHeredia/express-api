const express = require("express");
const router = express.Router();
const { controlador } = require("../controllers/controllers");

// Listar información API
router.get("/info", controlador.getInfo);
// Devolver productos
router.get("/", controlador.getProductos);
// Devolver productos por ID
router.get("/:id", controlador.getProducto);
// Insertar productos
router.post("/", controlador.postInsertar);
// Actualizar productos
router.put("/:id", controlador.putActualizar);
// Borrar productos
router.delete("/:id", controlador.delBorrar);

module.exports = router;
