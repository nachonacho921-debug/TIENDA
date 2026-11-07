const fetchProductos = async () => {
  const respuesta = await fetch(
    'https://dummyjson.com/products?limit=12'
  );

  if (!respuesta.ok) {
    throw new Error('Error al cargar productos');
  }

  const datos = await respuesta.json();

  return datos.products;
};

export default fetchProductos;