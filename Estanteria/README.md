# React + Vite

##Prompt Utilizado
ACTÚA COMO UN ARQUITECTO DE SOFTWARE Y DESARROLLADOR REACT EXPERTO.

TAREA: Refactoriza completamente la carpeta actual de un proyecto Vite + React para construir una aplicación funcional llamada “BookShelf”, una biblioteca digital donde el usuario pueda buscar libros, ver detalles y gestionar libros favoritos usando LocalStorage.

La aplicación debe consumir la API pública de Open Library y permitir cambio entre tema oscuro y tema claro.

API PRINCIPAL:
Usar Open Library Search API para buscar libros:

https://openlibrary.org/search.json?q=nombre_del_libro

API DE PORTADAS:
Usar Open Library Covers API para mostrar imágenes de los libros:

https://covers.openlibrary.org/b/id/COVER_ID-M.jpg

REQUERIMIENTOS FUNCIONALES:

1. Búsqueda de libros:

   * Crear un buscador donde el usuario pueda escribir el nombre de un libro.
   * Al buscar, consumir la API pública de Open Library.
   * Mostrar los primeros resultados en un grid responsivo.
   * Cada tarjeta debe mostrar:

     * Portada del libro, si existe.
     * Título del libro.
     * Autor o autores.
     * Año de primera publicación.
     * Botón “Ver más”.
     * Botón “Agregar a favoritos”.

2. Listado inicial:

   * Al cargar la aplicación, mostrar una búsqueda inicial recomendada, por ejemplo: “programming”, “harry potter” o “history”.
   * Mostrar al menos 12 libros en pantalla.
   * El diseño debe ser ordenado, limpio y responsivo.

3. Detalle del libro:

   * Al hacer clic en “Ver más”, mostrar una vista detallada del libro.
   * La vista debe incluir:

     * Título.
     * Autor o autores.
     * Año de primera publicación.
     * Cantidad de ediciones, si está disponible.
     * Idiomas, si están disponibles.
     * Portada en tamaño mediano.
     * Código o identificador de Open Library.
     * Botón para volver al inicio.
     * Botón para agregar o quitar de favoritos.

4. CRUD de favoritos usando LocalStorage:

   * Crear favorito:

     * Permitir agregar un libro a favoritos.
     * Guardar la información en LocalStorage.
   * Leer favoritos:

     * Crear una página o sección donde se listen solo los libros favoritos.
   * Actualizar favorito:

     * Permitir editar una nota personal del libro.
     * Ejemplo de nota: “Lo quiero leer este mes” o “Libro recomendado para estudiar”.
     * Permitir cambiar el estado de lectura:

       * Pendiente.
       * Leyendo.
       * Leído.
   * Eliminar favorito:

     * Permitir quitar un libro de favoritos.
     * Confirmar visualmente que fue eliminado.
   * Evitar duplicados:

     * No permitir agregar dos veces el mismo libro a favoritos.

5. Tema oscuro y tema claro:

   * Crear un ThemeContext.
   * Agregar un botón toggle para cambiar entre tema claro y tema oscuro.
   * Guardar la preferencia del tema en LocalStorage.
   * Al recargar la página, debe mantenerse el tema seleccionado.
   * Usar variables CSS para cambiar colores de fondo, texto, tarjetas y botones.

6. UI/UX:

   * Crear una interfaz moderna, simple y fácil de usar.
   * Usar tarjetas para mostrar los libros.
   * Agregar spinner mientras carga la información.
   * Mostrar mensaje de error si falla la API.
   * Mostrar mensaje cuando no existan resultados.
   * Mostrar mensaje cuando no existan favoritos guardados.
   * Los botones deben ser claros y visibles.
   * La aplicación debe ser responsiva para escritorio, tablet y celular.

7. ESTRUCTURA DE CARPETAS:

src/

├── api/
│   └── openLibraryApi.js

├── components/
│   ├── BookCard.jsx
│   ├── BookDetail.jsx
│   ├── BookGrid.jsx
│   ├── FavoritesList.jsx
│   ├── SearchBar.jsx
│   ├── ThemeToggle.jsx
│   └── Spinner.jsx

├── context/
│   └── ThemeContext.jsx

├── hooks/
│   ├── useBooks.js
│   └── useFavorites.js

├── pages/
│   ├── HomePage.jsx
│   ├── DetailPage.jsx
│   └── FavoritesPage.jsx

├── styles/
│   └── global.css

├── App.jsx
└── main.jsx

8. Rutas:

   * Usar React Router.
   * Crear las siguientes rutas:

     * “/” para la página principal.
     * “/book/:id” para el detalle del libro.
     * “/favorites” para la lista de favoritos.

9. Componentes principales:

   * BookCard.jsx:

     * Muestra la información básica de cada libro.
     * Incluye botones “Ver más” y “Agregar a favoritos”.

   * BookGrid.jsx:

     * Recibe la lista de libros.
     * Renderiza las tarjetas en formato grid.

   * BookDetail.jsx:

     * Muestra información detallada del libro seleccionado.

   * FavoritesList.jsx:

     * Muestra los libros favoritos guardados en LocalStorage.
     * Permite editar nota personal.
     * Permite cambiar estado de lectura.
     * Permite eliminar favoritos.

   * SearchBar.jsx:

     * Permite escribir y enviar búsquedas de libros.

   * ThemeToggle.jsx:

     * Permite cambiar entre modo claro y oscuro.

   * Spinner.jsx:

     * Se muestra mientras la app carga datos desde la API.

10. Hooks personalizados:

* useBooks.js:

  * Encargado de buscar libros desde Open Library.
  * Maneja estado de carga.
  * Maneja errores.
  * Guarda los resultados obtenidos.

* useFavorites.js:

  * Encargado de manejar el CRUD de favoritos.
  * Debe usar LocalStorage.
  * Debe permitir agregar, listar, editar y eliminar favoritos.

11. Estilos:

* Usar CSS normal o CSS Modules, pero mantener consistencia.
* Crear diseño responsivo.
* Usar variables CSS para los colores del tema claro y oscuro.
* Evitar estilos repetidos o desordenados.
* La app debe tener una apariencia limpia, tipo biblioteca digital.
* El título principal visible debe ser:

  BookShelf | Mi Biblioteca Favorita

12. Entregables:

* El proyecto debe correr correctamente con:

  npm run dev

* El proyecto debe compilar correctamente con:

  npm run build

* No debe mostrar errores en consola.

* El código debe estar comentado en español, especialmente en funciones importantes.

INSTRUCCIONES ADICIONALES:

* No modifiques package.json, excepto si es estrictamente necesario agregar dependencias.
* Si necesitas instalar una dependencia, usar solo react-router-dom.
* Usar fetch para consumir la API.
* No usar backend.
* Toda la persistencia debe hacerse con LocalStorage.
* Manejar errores con try/catch.
* Usar nombres de variables claros.
* No mezclar innecesariamente nombres en inglés y español.
* Comentar el código en español.
* La aplicación debe quedar lista para presentar en clases.
* El diseño debe ser simple, ordenado y funcional.
* Asegúrate de que la navegación entre páginas funcione correctamente.
* Asegúrate de que los favoritos se mantengan después de recargar la página.
* Asegúrate de que el tema claro u oscuro también se mantenga después de recargar la página.
