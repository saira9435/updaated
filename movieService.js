const SAMPLE_MOVIES = [
  {
    id: 1,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology.',
    poster: './Assets/inception.jpg',
    genre: 'Sci-Fi'
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years.',
    poster: 'Assets/ShawshankRedemptionMoviePoster.jpg',
    genre: 'Drama'
  },
  {
    id: 3,
    title: 'The_Dark_Knight',
    description: 'Batman faces his greatest challenge against the Joker.',
    poster: 'Assets/The_Dark_Knight.jpg',
    genre: 'Action'
  },
  {
    id: 4,
    title: 'the matrix',
    description: 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.',
    poster: './Assets/the_matrix.jpg',
    genre: 'Sci-Fi'
  },
  {
    id: 5,
    title: 'parasite',
    description: 'A poor family schemes to become employed by a wealthy family and infiltrate their household.',
    poster: './Assets/parasite.jpg',
    genre: 'Thriller'
  },
  {
    id: 6,
    title: 'Dune',
    description: 'A noble family becomes embroiled in a battle for the control of the galaxy\'s most valuable asset.',
    poster: './Assets/dune.jpg',
    genre: 'Sci-Fi'
  }
  {
    id: 7,
    title: 'The Hangover',
    description: 'Three friends lose their friend at his bachelor party in Las Vegas.',
    poster: './Assets/the_hangover.jpg',
    genre: 'Comedy'
  },
  {
    id: 8,
    title: 'Superbad',
    description: 'Two high school friends try to score alcohol for a party.',
    poster: './Assets/superbad.jpg',
    genre: 'Comedy'
  },
  {
    id: 9,
    title: 'Step Brothers',
    description: 'Two middle-aged men become stepbrothers and roommates.',
    poster: './Assets/step_brothers.jpg',
    genre: 'Comedy'
  },
  {
    id: 10,
    title: 'Bridesmaids',
    description: 'A competition between a maid of honor and a bridesmaid.',
    poster: './Assets/bridesmaids.jpg',
    genre: 'Comedy'
  },
  {
    id: 11,
    title: 'The Grand Budapest Hotel',
    description: 'A concierge and his protégé uncover a stolen painting.',
    poster: './Assets/grand_budapest.jpg',
    genre: 'Comedy'
  },
  {
    id: 12,
    title: 'Deadpool',
    description: 'A wisecracking anti-hero seeks revenge.',
    poster: './Assets/deadpool.jpg',
    genre: 'Comedy'
  },
  // Emotional Movies
  {
    id: 13,
    title: 'The Pursuit of Happyness',
    description: 'A struggling salesman rises to success.',
    poster: './Assets/pursuit_of_happyness.jpg',
    genre: 'Emotional'
  },
  {
    id: 14,
    title: 'Forrest Gump',
    description: 'A man with a low IQ recounts his extraordinary life.',
    poster: './Assets/forrest_gump.jpg',
    genre: 'Emotional'
  },
  {
    id: 15,
    title: 'The Green Mile',
    description: 'A prison guard witnesses miracles on death row.',
    poster: './Assets/green_mile.jpg',
    genre: 'Emotional'
  },
  {
    id: 16,
    title: 'The Notebook',
    description: 'A love story spanning decades.',
    poster: './Assets/the_notebook.jpg',
    genre: 'Emotional'
  },
  {
    id: 17,
    title: 'Life is Beautiful',
    description: 'A father protects his son during WWII with humor.',
    poster: './Assets/life_is_beautiful.jpg',
    genre: 'Emotional'
  },
  {
    id: 18,
    title: 'A Star is Born',
    description: 'A musician helps a young singer find fame.',
    poster: './Assets/a_star_is_born.jpg',
    genre: 'Emotional'
  }

];

export async function loadMovies() {
  return SAMPLE_MOVIES;
}

export function filterMovies(movies, searchTerm) {
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
export function filterMoviesByGenre(movies, genre) {
  return movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
}
