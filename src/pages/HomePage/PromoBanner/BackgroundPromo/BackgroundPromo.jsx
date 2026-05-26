import { getPopularMovies } from "../../../../api/tmdb"
import { useState, useEffect } from "react"
import styles from "./BackgroundPromo.module.css"

function BackgroundPromo({children}) {

  const [movies, setMovies] = useState([]);
  
  useEffect (() => {
    getPopularMovies().then(data => {
      setMovies(data.results.slice(0, 9))
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
            alt=""
            className={styles.bgImage}
          />
        ))}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default BackgroundPromo