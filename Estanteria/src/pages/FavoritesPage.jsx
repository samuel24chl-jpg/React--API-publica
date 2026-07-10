import FavoritesList from '../components/FavoritesList';

function FavoritesPage({
  favoritos,
  onEliminarFavorito,
  onActualizarNota,
  onActualizarEstadoLectura,
}) {
  return (
    <main className="pagina-favoritos">
      <FavoritesList
        favoritos={favoritos}
        onEliminarFavorito={onEliminarFavorito}
        onActualizarNota={onActualizarNota}
        onActualizarEstadoLectura={onActualizarEstadoLectura}
      />
    </main>
  );
}

export default FavoritesPage;
