const CarritoPanel = ({
  carrito,
  alternarCarrito,
  quitarTodo
}) => {

  const total = carrito.reduce(
    (suma, producto) => suma + producto.price,
    0
  );

  return (
    <aside className="carrito">

      <h3>Carrito ({carrito.length})</h3>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul>
            {carrito.map(p => (
              <li key={p.id}>

                <img
                  src={p.thumbnail}
                  alt={p.title}
                />

                <span>{p.title}</span>

                <button
                  onClick={() => alternarCarrito(p)}
                >
                  Quitar
                </button>

              </li>
            ))}
          </ul>

          <p className="total">
            Total: ${total.toFixed(2)}
          </p>

          <button onClick={quitarTodo}>
            Quitar todo
          </button>
        </>
      )}

    </aside>
  );
};

export default CarritoPanel;
