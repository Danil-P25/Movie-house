import styles from "./MovieActions.module.css";
function MovieActions() {
  return (
    <div className={styles.containerButton}>
      <button className={styles.buttonWatch}>Смотреть фильм</button>
      <button>Трейлер</button>
      <button>
        <img src="/images/download.svg" alt="скачать" />
      </button>
      <button>
        <img src="/images/favourites.svg" alt="В избранное" />
      </button>
    </div>
  );
}

export default MovieActions;
