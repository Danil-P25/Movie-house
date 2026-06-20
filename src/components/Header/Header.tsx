import Logo from "../UI/Logo/Logo";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";
import styles from "./Header.module.css";
import Menu from "../Menu/Menu";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brandNav}>
          <Logo />
          <Menu />
        </div>
        <div className={styles.headerActions}>
          <Search />
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
