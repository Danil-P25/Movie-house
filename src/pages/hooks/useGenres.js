import { useState, useEffect } from "react";
import { getAllGenres } from "../../api/tmdb";


export const useGenre = () => {
  const [genresMap, setGenresMap] = useState({});

  useEffect(() => {
    getAllGenres().then(data => {
      const genresByID = {}
      data.genres.forEach(genre => {
        genresByID[genre.id] = genre.name
      })
      setGenresMap(genresByID)
    })
  }, [])

  const getGenreNames = (genreIds) => {
    if (!genreIds || !genresMap) return ''
    if (!Array.isArray(genreIds)) return ''
    return genreIds.map(id => genresMap[id]).slice(0, 2).filter(Boolean).join(', ')
  }

  return { getGenreNames }
}