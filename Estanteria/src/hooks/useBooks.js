import { useState, useCallback } from 'react';
import { buscarLibros } from '../api/openLibraryApi';

/**
 * Hook personalizado para buscar libros desde la API de Open Library
 * Maneja estados de carga, error y resultados
 */
export function useBooks() {
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const buscar = useCallback(async (query) => {
    if (!query.trim()) return;

    setCargando(true);
    setError(null);

    try {
      const resultados = await buscarLibros(query);
      setLibros(resultados);
    } catch (err) {
      setError(err.message);
      setLibros([]);
    } finally {
      setCargando(false);
    }
  }, []);

  return { libros, cargando, error, buscar };
}
