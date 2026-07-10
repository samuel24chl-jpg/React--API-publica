const API_BASE = 'https://openlibrary.org';

/**
 * Busca libros en la API de Open Library
 * @param {string} query - Término de búsqueda
 * @returns {Promise<Array>} Lista de libros encontrados
 */
export async function buscarLibros(query) {
  const url = `${API_BASE}/search.json?q=${encodeURIComponent(query)}`;
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error(`Error al buscar libros: ${respuesta.status} ${respuesta.statusText}`);
  }

  const datos = await respuesta.json();

  if (!datos.docs || datos.docs.length === 0) {
    return [];
  }

  // Tomamos los primeros 12 resultados y los transformamos
  return datos.docs.slice(0, 12).map((libro) => ({
    id: libro.key,
    coverId: libro.cover_i || null,
    titulo: libro.title || 'Sin título',
    autor: libro.author_name ? libro.author_name.join(', ') : 'Autor desconocido',
    año: libro.first_publish_year || null,
    ediciones: libro.edition_count || 0,
    idiomas: libro.language || [],
  }));
}

/**
 * Obtiene el detalle de un libro por su ID de Open Library
 * @param {string} id - ID del libro (ej: /works/OL123W)
 * @returns {Promise<Object>} Detalle del libro
 */
export async function obtenerDetalleLibro(id) {
  const url = `${API_BASE}${id}.json`;
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error(`Error al obtener detalle: ${respuesta.status} ${respuesta.statusText}`);
  }

  const datos = await respuesta.json();

  return {
    id: datos.key,
    coverId: datos.covers ? datos.covers[0] : null,
    titulo: datos.title || 'Sin título',
    autor: datos.authors
      ? datos.authors.map((a) => a.author?.name || a.name || 'Desconocido').join(', ')
      : 'Autor desconocido',
    año: datos.first_publish_date || null,
    ediciones: datos.edition_count || 0,
    idiomas: datos.languages
      ? datos.languages.map((l) => l.key?.split('/').pop() || 'desconocido')
      : [],
    descripcion:
      typeof datos.description === 'string'
        ? datos.description
        : datos.description?.value || 'Sin descripción disponible.',
  };
}
