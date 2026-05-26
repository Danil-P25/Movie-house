import BackgroundPromo from "./BackgroundPromo/BackgroundPromo"
import Premiere from "./Premiere/Premiere"
import styles from "./PromoBanner.module.css"

function PromoBanner() {

  return (
    <section>
      <BackgroundPromo>
          <div className={styles.promoInfo}>
            <h1 className={styles.promoTitle}>
              Самые сочные премьеры кино — у вас дома
              </h1>
            <p>
              Ежедневно пополняемая библиотека
              с лучшими фильмами и сериалами — в дубляже
              и оригинале.Целый месяц бесплатно!
            </p>
            <button className={styles.promoButton}>Смотреть бесплатно</button>
          </div>
          <Premiere />
      </BackgroundPromo>
    </section>
  )
}

export default PromoBanner