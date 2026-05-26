import SearchIcon from "../../UI/Icon/SearchIcon"
import styles from "./Search.module.css"

function Search () {
return (
    <button className={styles.buttonActions}>
      <SearchIcon />
      <p>Поиск</p>
    </button>
)
}
export default Search