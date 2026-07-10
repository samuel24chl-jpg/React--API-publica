import { useNavigate } from 'react-router-dom';

function BookDetail({ libro, esFavorito, onAgregarFavorito, onEliminarFavorito }) {
  const navigate = useNavigate();
  const favorito = esFavorito(libro.id);

  const portadaUrl = libro.coverId
    ? `https://covers.openlibrary.org/b/id/${libro.coverId}-L.jpg`
    : null;

  return (
    <div className="detalle-contenedor">
      <button className="boton boton-volver" onClick={() => navigate('/')}>
        ← Volver al inicio
      </button>

      <div className="detalle-contenido">
        <div className="detalle-portada">
          {portadaUrl ? (
            <img src={portadaUrl} alt={`Portada de ${libro.titulo}`} />
          ) : (
            <div className="detalle-sin-portada">
              <span>Sin portada disponible</span>
            </div>
          )}
        </div>

        <div className="detalle-info">
          <h2 className="detalle-titulo">{libro.titulo}</h2>
          <p className="detalle-autor">
            <strong>Autor(es):</strong> {libro.autor}
          </p>

          {libro.año && (
            <p className="detalle-año">
              <strong>Año de publicación:</strong> {libro.año}
            </p>
          )}

          {libro.ediciones > 0 && (
            <p className="detalle-ediciones">
              <strong>Cantidad de ediciones:</strong> {libro.ediciones}
            </p>
          )}

          {libro.idiomas && libro.idiomas.length > 0 && (
            <p className="detalle-idiomas">
              <strong>Idiomas:</strong>{' '}
              {libro.idiomas.map((idioma) => idioma.toUpperCase()).join(', ')}
            </p>
          )}

          <p className="detalle-id">
            <strong>ID Open Library:</strong> {libro.id}
          </p>

          {libro.descripcion && (
            <p className="detalle-descripcion">
              <strong>Descripción:</strong> {libro.descripcion}
            </p>
          )}

          <div className="detalle-acciones">
            {favorito ? (
              <button
                className="boton boton-favorito-activo"
                onClick={() => onEliminarFavorito(libro.id)}
              >
                ★ Quitar de favoritos
              </button>
            ) : (
              <button
                className="boton boton-favorito"
                onClick={() => onAgregarFavorito(libro)}
              >
                ☆ Agregar a favoritos
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
