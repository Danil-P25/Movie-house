import styles from "./Menu.module.css";

function Menu() {
  return (
    <nav className={styles.menu}>
      <a href="#">Фильмы</a>
      <a href="#">Сериалы</a>
      <a href="#">Подборки</a>
    </nav>
  );
}
export default Menu;
