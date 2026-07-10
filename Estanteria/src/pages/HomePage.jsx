import { useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import BookGrid from '../components/BookGrid';
import Spinner from '../components/Spinner';

function HomePage({ libros, cargando, error, onBuscar, esFavorito, onAgregarFavorito, onEliminarFavorito }) {
  // Cargar búsqueda inicial recomendada al montar el componente
  useEffect(() => {
    onBuscar('programming');
  }, []);

  return (
    <main className="pagina-inicio">
      <SearchBar onBuscar={onBuscar} />

      {error && (
        <div className="mensaje-error">
          <p>Error: {error}</p>
        </div>
      )}

      {cargando ? (
        <Spinner />
      ) : (
        <BookGrid
          libros={libros}
          esFavorito={esFavorito}
          onAgregarFavorito={onAgregarFavorito}
          onEliminarFavorito={onEliminarFavorito}
        />
      )}
    </main>
  );
}

export default HomePage;
