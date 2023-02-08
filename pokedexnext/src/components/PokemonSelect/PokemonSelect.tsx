
import styles from "./PokemonSelect.module.css"

export default function PokemonSelect() {
  return (
    <div className={styles.ContainerPokemonSelect}>
      <div className={styles.ContainerOne}>
        <h1 className={styles.titlePokemon}>Charizard</h1>
        <p className={styles.paragraphPokemon}> Charizard se assemelha a um grande tradicional dragão europeu. Apesar da semelhança, Charizard é explicitamente um Pokémon dos tipos Fogo e Voador, e não um tipo Dragão, exceto em sua forma &quot;Mega Charizard X&quot; No entanto, ele pode aprender ataques do tipo Dragão.</p>
      </div>
      <div className={styles.ContainerTwo}>
        <img className={styles.imagePokemon} src="charizard.svg" alt="Charizard" />
      </div>
    </div>
  )
}
