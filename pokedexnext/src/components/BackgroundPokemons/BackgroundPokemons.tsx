import RenderPokemon from "../RenderPokemon/RenderPokemon"
import styles from "./BackgroundPokemons.module.css"

const BackgroundPokemons = () => {
  return (
    <div className={styles.containerPokemons}>
        <RenderPokemon></RenderPokemon>
    </div>
  )
}

export default BackgroundPokemons
