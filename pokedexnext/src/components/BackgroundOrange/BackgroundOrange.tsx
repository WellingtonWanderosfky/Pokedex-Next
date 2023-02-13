import styles from "./BackgroundOrange.module.css"

export const BackgroundOrange = ({children} : {children : React.ReactNode}) => {
  return (
    <div className={styles.containerHomePrincipal}>
      <img className={styles.pokeballBackground} src="background-pokeball.svg"></img>
      <img className={styles.pokeballBackgroundRight} src="background-pokeball.svg"></img>
      {children}
    </div>
  )
}
