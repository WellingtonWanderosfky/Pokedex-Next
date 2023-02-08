import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class PokemonComposition {

  @Field(_type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  image: string;

  @Field()
  type: string;
}
