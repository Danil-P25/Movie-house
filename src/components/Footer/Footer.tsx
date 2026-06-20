import Menu from "../Menu/Menu";
import Logo from "../UI/Logo/Logo";
import CatalogNav from "./CatalogNav/CatalogNav";
import CooperationNav from "./CooperationNav/CooperationNav.";
import MessengersNav from "./MessengersNav/MessengersNav";
import SubscriptionNav from "./SubscriptionNav/SubscriptionNav";
import SupportNav from "./SupportNav/SupportNav";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumn}>
        <Logo />
      </div>
      <div className={styles.footerColumn}>
        <h4>Меню</h4>
        <Menu />
        <h4>Подписка</h4>
        <SubscriptionNav />
      </div>
      <div className={styles.footerColumn}>
        <h4>Кино и сериалы</h4>
        <CatalogNav />
      </div>
      <div className={styles.footerColumn}>
        <h4>Сотрудничество</h4>
        <CooperationNav />
      </div>
      <div className={styles.footerColumn}>
        <h4>Техническая поддержка</h4>
        <SupportNav />
        <h4>Подписывайтесь на нас</h4>
        <MessengersNav />
      </div>
    </footer>
  );
}

export default Footer;
