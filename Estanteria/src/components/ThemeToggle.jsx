import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { tema, toggleTema } = useTheme();

  return (
    <button
      className="boton-tema"
      onClick={toggleTema}
      aria-label={`Cambiar a modo ${tema === 'light' ? 'oscuro' : 'claro'}`}
    >
      {tema === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeToggle;
