import Skeleton from "react-loading-skeleton";

function MovieCardSkeleton() {
  return (
    <div>
      <Skeleton height={180} borderRadius={12} />
      <Skeleton width="80%" style={{ marginTop: 10 }} />
      <Skeleton width="50%" />
    </div>
  );
}

export default MovieCardSkeleton;
