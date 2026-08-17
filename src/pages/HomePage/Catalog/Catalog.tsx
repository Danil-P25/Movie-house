import styles from "./Catalog.module.css";
import { getContentByGenre } from "@/api/catalog";
import { useGenre } from "@/hooks/useGenres/useGenres";
import GenreSection from "./GenreCatalog/GenreCatalog";
import { useQuery } from "@tanstack/react-query";
import { CatalogItem } from "@/shared/types/common";
import GenreSectionSkeleton from "./GenreCatalog/GenreSectionSkeleton";
import { CATALOG_GENRES } from "@/shared/constants/genres";
import AppButton from "@/components/UI/AppButton/AppButton";

function Catalog() {
  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery<CatalogItem[][]>({
    queryKey: ["catalog"],
    queryFn: () => Promise.all(CATALOG_GENRES.map((genre) => getContentByGenre(genre.id))),
  });

  const { getGenreNames } = useGenre();

  if (isLoading) {
    return (
      <section className={styles.catalog}>
        {Array.from({ length: 5 }).map((_, i) => (
          <GenreSectionSkeleton key={i} />
        ))}
      </section>
    );
  }

  if (error) return <div>Ошибка</div>;

  return (
    <section className={styles.catalog}>
      <h2 className={styles.titleCatalog}>Каталог фильмов и сериалов</h2>
      {CATALOG_GENRES.map((genre, index) => (
        <GenreSection
          key={genre.id}
          title={genre.title}
          items={movies[index]}
          getGenreNames={getGenreNames}
        />
      ))}
      <AppButton className={styles.showAll}>Посмотреть всё</AppButton>
    </section>
  );
}

export default Catalog;
