import SearchIcon from "../../UI/SearchIcon/SearchIcon"
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