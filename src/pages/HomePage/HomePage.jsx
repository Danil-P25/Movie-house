import PromoBanner from "./PromoBanner/PromoBanner"
import Catalog from "./Catalog/Catalog"
import styles from "./HomePage.module.css"

function HomePage() {

  return (
    <div className={styles.homePage}>
      <PromoBanner />
      <Catalog />
    </div>
  )
}

export default  HomePage