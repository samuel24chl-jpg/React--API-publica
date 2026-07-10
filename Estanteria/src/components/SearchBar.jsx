import { useState } from 'react';

function SearchBar({ onBuscar }) {
  const [consulta, setConsulta] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (consulta.trim()) {
      onBuscar(consulta.trim());
    }
  };

  return (
    <form className="buscador" onSubmit={manejarEnvio}>
      <input
        type="text"
        className="buscador-input"
        placeholder="Buscar libros por título, autor... ejemplo: Harry Potter"
        value={consulta}
        onChange={(e) => setConsulta(e.target.value)}
      />
      <button type="submit" className="buscador-boton">
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
