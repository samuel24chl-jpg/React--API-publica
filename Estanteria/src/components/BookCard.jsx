import { useNavigate } from 'react-router-dom';

function BookCard({ libro, esFavorito, onAgregarFavorito, onEliminarFavorito }) {
  const navigate = useNavigate();
  const favorito = esFavorito(libro.id);

  const portadaUrl = libro.coverId
    ? `https://covers.openlibrary.org/b/id/${libro.coverId}-M.jpg`
    : null;

  return (
    <article className="tarjeta-libro">
      <div className="tarjeta-portada">
        {portadaUrl ? (
          <img
            src={portadaUrl}
            alt={`Portada de ${libro.titulo}`}
            loading="lazy"
          />
        ) : (
          <div className="tarjeta-sin-portada">
            <span>Sin portada</span>
          </div>
        )}
      </div>

      <div className="tarjeta-info">
        <h3 className="tarjeta-titulo" title={libro.titulo}>
          {libro.titulo}
        </h3>
        <p className="tarjeta-autor">{libro.autor}</p>
        {libro.año && <p className="tarjeta-año">{libro.año}</p>}
      </div>

      <div className="tarjeta-acciones">
        <button
          className="boton boton-ver-mas"
          onClick={() => navigate(`/book/${encodeURIComponent(libro.id)}`)}
        >
          Ver más
        </button>

        {favorito ? (
          <button
            className="boton boton-favorito-activo"
            onClick={() => onEliminarFavorito(libro.id)}
          >
            ★ Favorito
          </button>
        ) : (
          <button
            className="boton boton-favorito"
            onClick={() => onAgregarFavorito(libro)}
          >
            ☆ Agregar
          </button>
        )}
      </div>
    </article>
  );
}

export default BookCard;
