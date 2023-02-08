import styles from "./Header.module.css"
const Header = () => {
  return (
    <div className={styles.ContainerHeader}>
      <button className={styles.buttonLogo}>
        <img src="logo-pokemon.png"></img>
      </button>
      <button className={styles.buttonLinkedin}>
        <img src="linkedin.svg"></img>
      </button>
    </div>
  )
}

export default Header
