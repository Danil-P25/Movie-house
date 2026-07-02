import Skeleton from "react-loading-skeleton";
import styles from "./MediaHero.module.css";

function MediaHeroSkeleton() {
  return (
    <section className={styles.hero}>
      <Skeleton
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <Skeleton height={60} width={450} />

        <div style={{ marginTop: 20 }}>
          <Skeleton width={120} />
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 24,
          }}
        >
          <Skeleton width={90} />
          <Skeleton width={80} />
          <Skeleton width={100} />
        </div>

        <div style={{ marginTop: 30 }}>
          <Skeleton count={4} />
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 40,
          }}
        >
          <Skeleton width={180} height={52} borderRadius={14} />
          <Skeleton width={180} height={52} borderRadius={14} />
        </div>
      </div>
    </section>
  );
}

export default MediaHeroSkeleton;
