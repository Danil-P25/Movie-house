import styles from "./Catalog.module.css"
import { useState, useEffect } from "react"
import { getContentByGenre } from "../../../api/tmdb"
import { useGenre } from "../../hooks/useGenres"
import GenreSection from "./GenreSection/GenreSection"

function Catalog() {
  const [comedies, setComedies] = useState([])
  const [dramas, setDramas] = useState([])
  const [fantasy, setFantasy] = useState([])
  const [thrillers, setThrillers] = useState([])
  const [detectives, setDetectives] = useState([])
  
  const { getGenreNames } = useGenre()

  useEffect(() => {
    Promise.all([
      getContentByGenre(35),
      getContentByGenre(18),
      getContentByGenre(14),
      getContentByGenre(53),
      getContentByGenre(9648)
    ]).then(([comediesData, dramasData, fantasyData, thrillersData, detectivesData]) => {
      setComedies(comediesData.slice(0, 4))
      setDramas(dramasData.slice(0, 4))
      setFantasy(fantasyData.slice(0, 4))
      setThrillers(thrillersData.slice(0, 4))
      setDetectives(detectivesData.slice(0, 4))
    })
  }, [])

  return (
    <section className={styles.catalog}>
      <h2 className={styles.titleCatalog}>Каталог фильмов и сериалов</h2>
      <GenreSection title="Комедии" items={comedies} getGenreNames={getGenreNames} />
      <GenreSection title="Драмы" items={dramas} getGenreNames={getGenreNames} />
      <GenreSection title="Фентази" items={fantasy} getGenreNames={getGenreNames} />
      <GenreSection title="Триллеры" items={thrillers} getGenreNames={getGenreNames} />
      <GenreSection title="Детективы" items={detectives} getGenreNames={getGenreNames} />
      <button className={styles.showAll}>Посмотреть всё</button>
    </section>
  )
}

export default Catalog