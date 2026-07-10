import BookCard from './BookCard';

function BookGrid({ libros, esFavorito, onAgregarFavorito, onEliminarFavorito }) {
  if (!libros || libros.length === 0) {
    return (
      <div className="mensaje-vacio">
        <p>No se encontraron libros. Intenta con otra búsqueda.</p>
      </div>
    );
  }

  return (
    <section className="grid-libros">
      {libros.map((libro) => (
        <BookCard
          key={libro.id}
          libro={libro}
          esFavorito={esFavorito}
          onAgregarFavorito={onAgregarFavorito}
          onEliminarFavorito={onEliminarFavorito}
        />
      ))}
    </section>
  );
}

export default BookGrid;
