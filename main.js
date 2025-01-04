import { initializeSearch } from './search.js';
import { renderMovies, renderTopPicks } from './movieRenderer.js';
import { filterMoviesByGenre, loadMovies } from './movieService.js';


async function filterGenre(genre) {
  const movies = await loadMovies();
  const filteredMovies = filterMoviesByGenre(movies, genre);
  renderMovies(filteredMovies);
}

// Define your top picks movies if not imported
const LATEST_MOVIES = [
    {
        id: 1,
        title: 'Guardians of the Galaxy Vol. 3',
        description: 'The Guardians embark on a mission to protect the galaxy.',
        poster: './Assets/guardians_vol3.jpg',
        genre: 'Action'
    },
    {
        id: 2,
        title: 'Dune: Part Two',
        description: 'The epic conclusion to the adaptation of Frank Herbert’s novel.',
        poster: './Assets/dune_part_two.jpg',
        genre: 'Sci-Fi'
    },
    {
        id: 3,
        title: 'Killers of the Flower Moon',
        description: 'A story about the Osage murders in the 1920s.',
        poster: './Assets/killers_of_the_flower_moon.jpg',
        genre: 'Drama'
    }
];

document.addEventListener('DOMContentLoaded', async () => {
    const movies = await loadMovies();
    renderMovies(movies);
    initializeSearch();

    // Render Top Picks
    renderTopPicks(LATEST_MOVIES); // Use LATEST_MOVIES instead of TOP_PICKS_MOVIES
});
