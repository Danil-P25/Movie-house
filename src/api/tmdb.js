const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ru-RU`)
  return response.json()
};

export const getUpcomingMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ru-RU`)
  return response.json()
};

export const getAllGenres = async () => {
  const [movies, tv] = await Promise.all([
    fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=ru-RU`).then(r => r.json()),
    fetch(`${BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=ru-RU`).then(r => r.json())
  ])

  const allGenres = [...movies.genres, ...tv.genres]
  const uniqueGenres = Array.from(
    new Map(allGenres.map(genre => [genre.id, genre])).values()
  )

  return { genres: uniqueGenres }
};


export const getContentByGenre = async (genreId) => {
  const [movies, tvShows] = await Promise.all([
    fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ru-RU&with_genres=${genreId}`).then(r => r.json()),
    fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&language=ru-RU&with_genres=${genreId}`).then(r => r.json())
  ])
  
  const moviesWithType = movies.results.map(movie => ({ ...movie, type: 'movie' }))
  const tvWithType = tvShows.results.map(tv => ({ ...tv, type: 'tv' }))
  const allContent = [...moviesWithType, ...tvWithType]
  return allContent.sort(() => Math.random() - 0.5)
};