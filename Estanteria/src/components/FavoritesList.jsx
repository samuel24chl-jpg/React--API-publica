import { useNavigate } from 'react-router-dom';

const ESTADOS_LECTURA = [
  { valor: 'pendiente', etiqueta: '⏳ Pendiente' },
  { valor: 'leyendo', etiqueta: '📖 Leyendo' },
  { valor: 'leido', etiqueta: '✅ Leído' },
];

function FavoritesList({
  favoritos,
  onEliminarFavorito,
  onActualizarNota,
  onActualizarEstadoLectura,
}) {
  const navigate = useNavigate();

  if (!favoritos || favoritos.length === 0) {
    return (
      <div className="mensaje-vacio">
        <p>No tienes libros favoritos guardados.</p>
        <p>¡Busca libros y agrégalos a tu colección!</p>
        <button className="boton boton-ver-mas" onClick={() => navigate('/')}>
          Ir a buscar libros
        </button>
      </div>
    );
  }

  const portadaUrl = (coverId) =>
    coverId
      ? `https://covers.openlibrary.org/b/id/${coverId}-S.jpg`
      : null;

  return (
    <div className="favoritos-lista">
      {favoritos.map((libro) => (
        <article key={libro.id} className="favorito-item">
          <div className="favorito-portada">
            {portadaUrl(libro.coverId) ? (
              <img src={portadaUrl(libro.coverId)} alt={libro.titulo} />
            ) : (
              <div className="favorito-sin-portada">
                <span>Sin portada</span>
              </div>
            )}
          </div>

          <div className="favorito-info">
            <h3>{libro.titulo}</h3>
            <p className="favorito-autor">{libro.autor}</p>

            <div className="favorito-campo">
              <label htmlFor={`nota-${libro.id}`}>Nota personal:</label>
              <textarea
                id={`nota-${libro.id}`}
                className="favorito-textarea"
                value={libro.nota || ''}
                onChange={(e) => onActualizarNota(libro.id, e.target.value)}
                placeholder="Ej: Lo quiero leer este mes..."
                rows={2}
              />
            </div>

            <div className="favorito-campo">
              <label htmlFor={`estado-${libro.id}`}>Estado de lectura:</label>
              <select
                id={`estado-${libro.id}`}
                className="favorito-select"
                value={libro.estadoLectura || 'pendiente'}
                onChange={(e) =>
                  onActualizarEstadoLectura(libro.id, e.target.value)
                }
              >
                {ESTADOS_LECTURA.map((estado) => (
                  <option key={estado.valor} value={estado.valor}>
                    {estado.etiqueta}
                  </option>
                ))}
              </select>
            </div>

            <div className="favorito-detalle-boton">
              <button
                className="boton boton-ver-mas"
                onClick={() =>
                  navigate(`/book/${encodeURIComponent(libro.id)}`)
                }
              >
                Ver detalle
              </button>
            </div>
          </div>

          <button
            className="boton boton-eliminar"
            onClick={() => onEliminarFavorito(libro.id)}
            title="Eliminar de favoritos"
          >
            ✕
          </button>
        </article>
      ))}
    </div>
  );
}

export default FavoritesList;
