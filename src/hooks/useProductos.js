import { useState, useEffect } from 'react';
import fetchProductos from '../services/fetchProductos';

const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setCargando(true);
        setError(null);

        const lista = await fetchProductos();
        setProductos(lista);

      } catch (err) {
        setError(err.message);

      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  return { productos, cargando, error };
};

export default useProductos;