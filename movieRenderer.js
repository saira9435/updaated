export function renderMovies(movies) {
  const movieGrid = document.getElementById('movieGrid');
  movieGrid.innerHTML = movies.map(movie => createMovieCard(movie)).join('');
}

function createMovieCard(movie) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card movie-card">
        <img src="${movie.poster}" class="card-img-top movie-poster" alt="${movie.title}">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <span class="badge bg-primary mb-2">${movie.genre}</span>
          <p class="card-text">${movie.description}</p>
        </div>
      </div>
    </div>
  `;
}
