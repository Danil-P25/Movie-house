import AppButton from "@/components/UI/AppButton/AppButton";
import styles from "./MovieActions.module.css";
function MovieActions() {
  return (
    <div className={styles.containerButton}>
      <AppButton className={styles.buttonWatch}>Смотреть фильм</AppButton>
      <AppButton>Трейлер</AppButton>
      <AppButton>
        <img src="/images/download.svg" alt="скачать" />
      </AppButton>
      <AppButton>
        <img src="/images/favourites.svg" alt="В избранное" />
      </AppButton>
    </div>
  );
}

export default MovieActions;
