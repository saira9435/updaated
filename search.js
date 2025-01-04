import { loadMovies, filterMovies } from './movieService.js';
import { renderMovies } from './movieRenderer.js';

export function initializeSearch() {
  const searchInput = document.getElementById('searchInput');
  
  searchInput.addEventListener('input', async (e) => {
    const searchTerm = e.target.value;
    const movies = await loadMovies();
    const filteredMovies = filterMovies(movies, searchTerm);
    renderMovies(filteredMovies);
  });
}