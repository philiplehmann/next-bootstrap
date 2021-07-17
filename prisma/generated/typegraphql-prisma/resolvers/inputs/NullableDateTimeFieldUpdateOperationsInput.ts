import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";

import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NullableDateTimeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  set?: Date | undefined;
}
