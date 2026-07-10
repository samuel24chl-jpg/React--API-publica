import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import FavoritesPage from './pages/FavoritesPage';
import { useBooks } from './hooks/useBooks';
import { useFavorites } from './hooks/useFavorites';
import './styles/global.css';

function AppContent() {
  const { libros, cargando, error, buscar } = useBooks();
  const {
    favoritos,
    agregarFavorito,
    eliminarFavorito,
    esFavorito,
    actualizarNota,
    actualizarEstadoLectura,
  } = useFavorites();

  return (
    <>
      <header className="app-header">
        <NavLink to="/" className="logo">
          BookShelf | Mi Biblioteca Favorita
        </NavLink>
        <nav>
          <NavLink to="/" end>
            Inicio
          </NavLink>
          <NavLink to="/favorites">Favoritos</NavLink>
          <ThemeToggle />
        </nav>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              libros={libros}
              cargando={cargando}
              error={error}
              onBuscar={buscar}
              esFavorito={esFavorito}
              onAgregarFavorito={agregarFavorito}
              onEliminarFavorito={eliminarFavorito}
            />
          }
        />
        <Route
          path="/book/:id"
          element={
            <DetailPage
              esFavorito={esFavorito}
              onAgregarFavorito={agregarFavorito}
              onEliminarFavorito={eliminarFavorito}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favoritos={favoritos}
              onEliminarFavorito={eliminarFavorito}
              onActualizarNota={actualizarNota}
              onActualizarEstadoLectura={actualizarEstadoLectura}
            />
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
