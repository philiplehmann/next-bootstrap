import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";

import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AccountProviderIdProviderAccountIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  providerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  providerAccountId!: string;
}