
import styles from "./PokemonSelect.module.css"

export default function PokemonSelect() {
  return (
    <div className={styles.ContainerPokemonSelect}>
      <div className={styles.ContainerOne}>
        <h1 className={styles.titlePokemon}>Charizard</h1>
        <p className={styles.paragraphPokemon}> Charizard se assemelha a um grande tradicional dragão europeu. Apesar da semelhança, Charizard é explicitamente um Pokémon dos tipos Fogo e Voador, e não um tipo Dragão, exceto em sua forma &quot;Mega Charizard X&quot; No entanto, ele pode aprender ataques do tipo Dragão.</p>
        <button className={styles.buttonPokemon}>
          <img src="icon-bolt.svg"></img>
          Mais Detalhes</button>
      </div>

      <div className={styles.ContainerTwo}>
        <img className={styles.RectangleOne} src="Rectangle.svg" alt="Rectangle"/>
        <img src="divider-fire.svg" alt="Fire Driver"/>
        <img src="Rectangle.svg" alt="Rectangle"/>
      </div>

      <div className={styles.ContainerThree}>
        <img className={styles.imagePokemon} src="charizard.svg" alt="Charizard" />
      </div>
    </div>
  )
}
