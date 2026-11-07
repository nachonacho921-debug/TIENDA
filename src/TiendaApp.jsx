import { useState } from 'react';

import useProductos from './hooks/useProductos';
import ProductoList from './components/ProductoList';
import CarritoPanel from './components/CarritoPanel';

function TiendaApp() {

  const { productos, cargando, error } = useProductos();

  const [carrito, setCarrito] = useState([]);

  const alternarCarrito = (producto) => {

    setCarrito(prev => {

      const existe = prev.some(
        item => item.id === producto.id
      );

      if (existe) {
        return prev.filter(
          item => item.id !== producto.id
        );
      }

      return [...prev, producto];

    });

  };

  // Vaciar todo el carrito
  const quitarTodo = () => {
    setCarrito([]);
  };

  return (
    <div>

      <h1>Mi Tienda Online</h1>

      <div className="layout">

        {cargando && (
          <p className="mensaje">
            Cargando ...
          </p>
        )}

        {error && !cargando && (
          <p className="mensaje error">
            {error}
          </p>
        )}

        {!cargando && !error && (
          <>
            <ProductoList
              productos={productos}
              carrito={carrito}
              alternarCarrito={alternarCarrito}
            />

            <CarritoPanel
              carrito={carrito}
              alternarCarrito={alternarCarrito}
              quitarTodo={quitarTodo}
            />
          </>
        )}

      </div>

    </div>
  );
}

export default TiendaApp;
