import styles from "./GenreSection.module.css"

function GenreSection({ title, items, getGenreNames }) {
  if (!items || items.length === 0) return null

  return (
    <div className={styles.boxGenre}>
      <h3>{title}</h3>
      <ul className={styles.catalogList}>
        {items.map(item => (
          <li key={item.id}>
            <img
              className={styles.imgCatalog}
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt={item.title || item.name}
            />
            <div className={styles.catalogContent}>
              <span> {item.vote_average?.toFixed(1)}</span>
              <span>{item.type === 'movie' ? 'Фильм' : 'Сериал'}</span>
              <span>{getGenreNames(item.genre_ids)}</span>
            </div>
            <h4>{item.title || item.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GenreSection