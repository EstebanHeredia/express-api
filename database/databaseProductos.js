const productos = [
  {
    id: "1",
    title: "Panela",
    Price: "2",
    thumbnail:
      "https://mercaenlinea.nyc3.digitaloceanspaces.com/2021/07/panela.jpg",
  },
  {
    id: "2",
    title: "Arroz",
    Price: "5",
    thumbnail:
      "https://www.comedera.com/wp-content/uploads/2019/11/arroz-blanco-cocido-500x375.jpg",
  },
  {
    id: "3",
    title: "Helado",
    Price: "10",
    thumbnail:
      "https://www.recetasderechupete.com/wp-content/uploads/2019/07/shutterstock_1010248351-768x527.jpg",
  },
];

function randomId() {
  return `${Date.now()}`;
}

const databaseProductos = {
  listarTodos: () => {
    return [...productos];
  },
  listarPorId: (id) => {
    const producto = productos.find((p) => p.id === id);
    if (!producto) {
      throw new Error("No se encuentra relación con dicho producto");
    }
    return producto;
  },
  insertarProducto: (datos) => {
    const producto = datos;
    producto.id = randomId();
    productos.push(producto);
    return producto;
  },

  reemplazarProductoPorId: (id, datos) => {
    const index = productos.findIndex((p) => p.id === id);
    console.log(index);
    if (index === -1) {
      const error = new Error("no existe registro con ese id");
      throw error;
    }
    const producto = datos;
    producto.id = id;
    productos[index] = producto;
    return producto;
  },

  borrarProductoPorId: (id) => {
    const index = productos.findIndex((p) => p.id === id);
    console.log(index);
    if (index === -1) {
      const error = new Error("no existe registro con ese id");
      throw error;
    }
    productos.splice(index, 1);
  },
};

module.exports = { databaseProductos };
