import SearchIcon from "../../UI/SearchIcon/SearchIcon";
import styles from "./Search.module.css";
import { useState } from "react";
import SearchModal from "./SearchModal/SearchModal";

function Search() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <SearchIcon />
        <p>Поиск</p>
      </button>

      {isOpen && <SearchModal onClose={() => setIsOpen(false)} />}
    </>
  );
}
export default Search;
