import Skeleton from "react-loading-skeleton";

function PremiereSkeleton() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index}>
          <Skeleton height={450} width={300} />
          <Skeleton width={220} style={{ marginTop: 10 }} />
          <Skeleton width={120} />
        </div>
      ))}
    </div>
  );
}

export default PremiereSkeleton;
