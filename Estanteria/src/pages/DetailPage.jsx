import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerDetalleLibro } from '../api/openLibraryApi';
import BookDetail from '../components/BookDetail';
import Spinner from '../components/Spinner';

function DetailPage({ esFavorito, onAgregarFavorito, onEliminarFavorito }) {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDetalle = async () => {
      setCargando(true);
      setError(null);
      try {
        const datos = await obtenerDetalleLibro(decodeURIComponent(id));
        setLibro(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    cargarDetalle();
  }, [id]);

  if (cargando) return <Spinner />;

  if (error) {
    return (
      <div className="mensaje-error">
        <p>Error al cargar el detalle: {error}</p>
      </div>
    );
  }

  if (!libro) {
    return (
      <div className="mensaje-vacio">
        <p>No se encontró información del libro.</p>
      </div>
    );
  }

  return (
    <BookDetail
      libro={libro}
      esFavorito={esFavorito}
      onAgregarFavorito={onAgregarFavorito}
      onEliminarFavorito={onEliminarFavorito}
    />
  );
}

export default DetailPage;
