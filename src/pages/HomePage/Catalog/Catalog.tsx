import styles from "./Catalog.module.css";
import { useState, useEffect } from "react";
import { getContentByGenre } from "../../../api/helpers";
import { useGenre } from "../../hooks/useGenres/useGenres";
import GenreSection from "./GenreCatalog/GenreCatalog";
import { PartialMovie } from "../../../shared/types/common";

function Catalog() {
  const [comedies, setComedies] = useState<PartialMovie[]>([]);
  const [dramas, setDramas] = useState<PartialMovie[]>([]);
  const [fantasy, setFantasy] = useState<PartialMovie[]>([]);
  const [thrillers, setThrillers] = useState<PartialMovie[]>([]);
  const [detectives, setDetectives] = useState<PartialMovie[]>([]);

  const { getGenreNames } = useGenre();

  useEffect(() => {
    Promise.all([
      getContentByGenre(35),
      getContentByGenre(18),
      getContentByGenre(14),
      getContentByGenre(53),
      getContentByGenre(9648),
    ]).then(
      ([
        comediesData,
        dramasData,
        fantasyData,
        thrillersData,
        detectivesData,
      ]) => {
        setComedies(comediesData.slice(0, 10));
        setDramas(dramasData.slice(0, 10));
        setFantasy(fantasyData.slice(0, 10));
        setThrillers(thrillersData.slice(0, 10));
        setDetectives(detectivesData.slice(0, 10));
      },
    );
  }, []);

  return (
    <section className={styles.catalog}>
      <h2 className={styles.titleCatalog}>Каталог фильмов и сериалов</h2>
      <GenreSection
        title="Комедии"
        items={comedies}
        getGenreNames={getGenreNames}
      />
      <GenreSection
        title="Драмы"
        items={dramas}
        getGenreNames={getGenreNames}
      />
      <GenreSection
        title="Фентази"
        items={fantasy}
        getGenreNames={getGenreNames}
      />
      <GenreSection
        title="Триллеры"
        items={thrillers}
        getGenreNames={getGenreNames}
      />
      <GenreSection
        title="Детективы"
        items={detectives}
        getGenreNames={getGenreNames}
      />
      <button className={styles.showAll}>Посмотреть всё</button>
    </section>
  );
}

export default Catalog;
