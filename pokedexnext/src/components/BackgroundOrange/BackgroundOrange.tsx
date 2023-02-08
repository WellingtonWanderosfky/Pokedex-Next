import styles from "./BackgroundOrange.module.css"

export const BackgroundOrange = ({children} : {children : React.ReactNode}) => {
  return (
    <div className={styles.containerHomePrincipal}>
      {children}
    </div>
  )
}
