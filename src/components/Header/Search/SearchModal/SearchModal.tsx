import { useState } from "react";
import { useSearch } from "@/hooks/useSearch/useSearch";
import styles from "./SearchModal.module.css";
import SearchResultCard from "./SearchResultCard/SearchResultCard";

interface SearchModalProps {
  onClose: () => void;
}

function SearchModal({ onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  const { data: results = [], isLoading } = useSearch(query);

  const mediaResults = results.filter(
    (item) => item.media_type === "movie" || item.media_type === "tv",
  );

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />

      <div className={styles.modal}>
        <div className={styles.searchBar}>
          <input
            className={styles.input}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Название фильма, сериала..."
          />
        </div>

        <div className={styles.results}>
          {isLoading && <p>Загрузка...</p>}

          {!isLoading &&
            mediaResults.map((item) => (
              <SearchResultCard key={item.id} item={item} onClose={onClose} />
            ))}

          {!isLoading && query.length > 1 && mediaResults.length === 0 && (
            <p>Ничего не найдено</p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchModal;
