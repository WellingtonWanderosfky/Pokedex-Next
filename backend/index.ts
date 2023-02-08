import "reflect-metadata";
import path from "path";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { PokemonCompositionResolver } from "./src/resolvers/PokemonCompositionResolver";

async function main() {
  try {
    const schema = await buildSchema({
      resolvers: [
        PokemonCompositionResolver,
      ],
      emitSchemaFile: path.resolve(__dirname, "schema.gql")
    })

    const server = new ApolloServer({
      schema
    });

    const { url } = await server.listen();

    console.log(`Server running on ${url}`);

  } catch (error) {
    console.log("error", error);
  }
}

main();
