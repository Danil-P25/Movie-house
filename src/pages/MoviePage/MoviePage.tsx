// import styles from "./MoviePage.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AboutMovie from "./AboutMovie/AboutMovie";
import RelatedMovies from "./RelatedMovies/RelatedMovies";
import MovieName from "./MovieName/MovieName";
import { MovieDetails } from "./types/types";
import { getMovieDetails, getTvDetails } from "../../api/helpers";

function MoviePage({ type }: { type: "movie" | "tv" }) {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);

      const fetchData =
        type === "movie" ? getMovieDetails(id) : getTvDetails(id);

      fetchData.then((data) => {
        setMovie(data);
        setLoading(false);
      });
    }
  }, [id, type]);

  if (loading) return <div>Загрузка</div>;

  return (
    <>
      <div>
        <MovieName data={movie} />
      </div>
      <AboutMovie data={movie} />
      <RelatedMovies movieId={id} type={type} />
    </>
  );
}

export default MoviePage;
