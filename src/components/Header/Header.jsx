import Logo from "../UI/Logo/Logo"
import Menu from "../UI/Menu/Menu"
import Profile from "./Profile/Profile"
import Search from "./Search/Search"
import styles from "./Header.module.css"


function Header () {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Menu />
        <Search />
        <Profile />
      </div>
    </header>
  )
}

export default Header