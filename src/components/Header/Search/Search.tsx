import { useState } from "react";
import SearchIcon from "../../UI/SearchIcon/SearchIcon";
import SearchModal from "./SearchModal/SearchModal";
import styles from "./Search.module.css";

function Search() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.buttonSearch} onClick={() => setIsOpen(true)}>
        <SearchIcon />
        <span>Поиск</span>
      </button>
      {isOpen && <SearchModal onClose={() => setIsOpen(false)} />}
    </>
  );
}

export default Search;
