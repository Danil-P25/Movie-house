import Skeleton from "react-loading-skeleton";
import MovieCardSkeleton from "@/components/UI/MovieCard/MovieCardSkeleton";

function GenreSectionSkeleton() {
  return (
    <div>
      <Skeleton width={180} height={24} />

      <div style={{ display: "flex", gap: 20, marginTop: 15 }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

export default GenreSectionSkeleton;
