import { useState } from "react";
import { useSearch } from "@/hooks/useSearch/useSearch";
import styles from "./SearchModal.module.css";
import SearchResultCard from "./SearchResultCard/SearchResultCard";
import AppButton from "@/components/UI/AppButton/AppButton";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll/useLockBodyScroll";

interface SearchModalProps {
  onClose: () => void;
}

function SearchModal({ onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const { data = [], isLoading } = useSearch(query);
  const mediaResults = data.filter(
    (item) => item.media_type === "movie" || item.media_type === "tv",
  );
  useLockBodyScroll();

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>
        <header className={styles.header}>
          <input
            className={styles.input}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Название фильма или сериала"
            autoFocus
          />
          <AppButton className={styles.close} onClick={onClose}>
            ✕
          </AppButton>
        </header>
        <div className={styles.results}>
          {isLoading && <p className={styles.info}>Поиск...</p>}
          {!isLoading &&
            mediaResults.map((item) => (
              <SearchResultCard key={item.id} item={item} onClose={onClose} />
            ))}
          {!isLoading && query.length > 1 && mediaResults.length === 0 && (
            <p className={styles.info}>Ничего не найдено</p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchModal;
