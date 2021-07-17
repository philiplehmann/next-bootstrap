import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";

import { DecimalJSScalar } from "../../scalars";
import { SessionUpdateWithoutUserInput } from "../inputs/SessionUpdateWithoutUserInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: false
  })
  where!: SessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SessionUpdateWithoutUserInput, {
    nullable: false
  })
  data!: SessionUpdateWithoutUserInput;
}
