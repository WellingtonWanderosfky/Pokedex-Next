import { BackgroundOrange } from "@/components/BackgroundOrange/BackgroundOrange";
import BackgroundPokemons from "@/components/BackgroundPokemons/BackgroundPokemons";
import Header from "@/components/Header/Header";
import PokemonSelect from "@/components/PokemonSelect/PokemonSelect";

export default function Home() {
  return (
    <>
      <Header></Header>
      <BackgroundOrange>
        <PokemonSelect></PokemonSelect>
      </BackgroundOrange>
      <BackgroundPokemons></BackgroundPokemons>

    </>
  )
}
