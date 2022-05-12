const { databaseProductos } = require("../database/databaseProductos.js");

const hello = {
  api: "V1",
  fabricacion: "CoderHouse",
};

const controlador = {
  getInfo: (req, res) => {
    res.json(hello);
  },
  getProductos: (req, res) => {
    res.json(databaseProductos.listarTodos());
  },
  getProducto: (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    try {
      const busqueda = databaseProductos.listarPorId(id);
      res.json(busqueda);
    } catch (error) {
      res.status(404).json({ mensaje: error.message });
    }
  },
  postInsertar: (req, res) => {
    const agregarProducto = databaseProductos.insertarProducto(req.body);
    res.status(201).json(agregarProducto);
  },
  putActualizar: (req, res) => {
    console.log(req.params);
    const body = req.body;
    const id = req.params.id;
    try {
      const productoActualizado = databaseProductos.reemplazarProductoPorId(
        id,
        body
      );
      res.json(productoActualizado);
    } catch (error) {
      res.status(404).json({ mensaje: error.message });
    }
  },

  delBorrar: (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    try {
      databaseProductos.borrarProductoPorId(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(404).json({ mensaje: error.message });
    }
  },
};

module.exports = { controlador };
