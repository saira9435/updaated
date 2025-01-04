const LATEST_MOVIES = [
    {
        id: 1,
        title: 'Guardians of the Galaxy Vol. 3',
        description: 'The Guardians embark on a mission to protect the galaxy.',
        poster: './Assets/guardians_vol3.jpg', // Ensure this matches the actual file name
        genre: 'Action'
    },
    {
        id: 2,
        title: 'The Marvels',
        description: 'Carol Danvers, Kamala Khan, and Monica Rambeau team up to save the universe.',
        poster: './Assets/the_marvels.jpg', // Ensure this matches the actual file name
        genre: 'Action'
    },
    {
        id: 3,
        title: 'Mission: Impossible – Dead Reckoning Part One',
        description: 'Ethan Hunt and his IMF team embark on their most dangerous mission yet.',
        poster: './Assets/mission_impossible_dead_reckoning_part_one.jpg', // Ensure this matches the actual file name
        genre: 'Action'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    renderTopPicks(LATEST_MOVIES);
});

function renderTopPicks(movies) {
    const topPicksGrid = document.getElementById('topPicksGrid');
    if (topPicksGrid) {
        topPicksGrid.innerHTML = movies.map(movie => createMovieCard(movie)).join('');
    } else {
        console.error("Element with ID 'topPicksGrid' not found.");
    }
}

function createMovieCard(movie) {
    return `
      <div class="col-md-4 mb-4">
        <div class="card movie-card">
          <img src="${movie.poster}" class="card-img-top movie-poster" alt="${movie.title}" onerror="this.onerror=null; this.src='./Assets/placeholder.jpg';">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <span class="badge bg-primary mb-2">${movie.genre}</span>
            <p class="card-text">${movie.description}</p>
          </div>
        </div>
      </div>
    `;
}