import styles from "./SubscriptionNav.module.css";

function SubscriptionNav() {
  return (
    <nav className={styles.subscription}>
      <a href="#">Тарифный план</a>
      <a href="#">Акции</a>
      <a href="#">Подписка за баллы</a>
    </nav>
  );
}
export default SubscriptionNav;
