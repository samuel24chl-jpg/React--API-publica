import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'bookshelf_favoritos';

/**
 * Hook personalizado para manejar el CRUD de libros favoritos
 * Persiste los datos en localStorage
 */
export function useFavorites() {
  const [favoritos, setFavoritos] = useState(() => {
    try {
      const datos = localStorage.getItem(STORAGE_KEY);
      return datos ? JSON.parse(datos) : [];
    } catch {
      return [];
    }
  });

  // Sincroniza los favoritos con localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritos));
  }, [favoritos]);

  /**
   * Agrega un libro a favoritos (evita duplicados)
   */
  const agregarFavorito = useCallback((libro) => {
    setFavoritos((prev) => {
      const existe = prev.some((fav) => fav.id === libro.id);
      if (existe) return prev;
      return [...prev, { ...libro, nota: '', estadoLectura: 'pendiente' }];
    });
  }, []);

  /**
   * Elimina un libro de favoritos por su ID
   */
  const eliminarFavorito = useCallback((id) => {
    setFavoritos((prev) => prev.filter((fav) => fav.id !== id));
  }, []);

  /**
   * Verifica si un libro está en favoritos
   */
  const esFavorito = useCallback(
    (id) => {
      return favoritos.some((fav) => fav.id === id);
    },
    [favoritos]
  );

  /**
   * Actualiza la nota personal de un libro favorito
   */
  const actualizarNota = useCallback((id, nota) => {
    setFavoritos((prev) =>
      prev.map((fav) => (fav.id === id ? { ...fav, nota } : fav))
    );
  }, []);

  /**
   * Actualiza el estado de lectura de un libro favorito
   */
  const actualizarEstadoLectura = useCallback((id, estado) => {
    setFavoritos((prev) =>
      prev.map((fav) => (fav.id === id ? { ...fav, estadoLectura: estado } : fav))
    );
  }, []);

  return {
    favoritos,
    agregarFavorito,
    eliminarFavorito,
    esFavorito,
    actualizarNota,
    actualizarEstadoLectura,
  };
}
