import styles from "./Catalog.module.css";
import { getContentByGenre } from "@/api/catalog";
import { useGenre } from "@/hooks/useGenres/useGenres";
import GenreSection from "./GenreCatalog/GenreCatalog";
import { useQuery } from "@tanstack/react-query";
import { CatalogItem } from "@/shared/types/common";
import GenreSectionSkeleton from "./GenreCatalog/GenreSectionSkeleton";

function Catalog() {
  const catalogGenres = [
    { id: 35, title: "Комедии" },
    { id: 18, title: "Драмы" },
    { id: 14, title: "Фэнтези" },
    { id: 53, title: "Триллеры" },
    { id: 9648, title: "Детективы" },
  ];

  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery<CatalogItem[][]>({
    queryKey: ["catalog"],
    queryFn: () =>
      Promise.all(catalogGenres.map((genre) => getContentByGenre(genre.id))),
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
      {catalogGenres.map((genre, index) => (
        <GenreSection
          key={genre.id}
          title={genre.title}
          items={movies[index]}
          getGenreNames={getGenreNames}
        />
      ))}
      <button className={styles.showAll}>Посмотреть всё</button>
    </section>
  );
}

export default Catalog;
