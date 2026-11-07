import ProductoCard from './ProductoCard';

const ProductoList = ({
  productos,
  carrito,
  alternarCarrito
}) => {
  return (
    <div className="grid">

      {productos.map(p => (
        <ProductoCard
          key={p.id}
          producto={p}
          enCarrito={carrito.some(
            item => item.id === p.id
          )}
          alternarCarrito={alternarCarrito}
        />
      ))}

    </div>
  );
};

export default ProductoList;