const ProductoCard = ({
  producto,
  enCarrito,
  alternarCarrito
}) => {
  return (
    <div className={`card ${enCarrito ? 'en-carrito' : ''}`}>

      <img
        src={producto.thumbnail}
        alt={producto.title}
      />

      <h4>{producto.title}</h4>

      <p className="categoria">
        {producto.category}
      </p>

      <p className="precio">
        ${producto.price}
      </p>

      <button onClick={() => alternarCarrito(producto)}>
        {enCarrito
          ? 'Quitar del carrito'
          : 'Agregar al carrito'}
      </button>

    </div>
  );
};

export default ProductoCard;