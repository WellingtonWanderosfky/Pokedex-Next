import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { PokemonComposition } from "../models/PokemonComposition";
import crypto from "crypto";

Resolver()
export class PokemonCompositionResolver {
  private data: PokemonComposition[] = [];
 
  @Query(() => [PokemonComposition])
  async pokemonComposition() {
    return this.data
  }

  @Mutation(() => PokemonComposition)
  async createPokemonComposition({ name, image, type }: PokemonComposition) {
    const pokemonComposition = {
      id: crypto.randomUUID(),
      name,
      image,
      type
    }

    this.data.push(pokemonComposition);

    return;
  }
}
