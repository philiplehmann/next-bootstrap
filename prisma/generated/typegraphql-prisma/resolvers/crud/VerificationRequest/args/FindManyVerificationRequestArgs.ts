import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationRequestOrderByInput } from "../../../inputs/VerificationRequestOrderByInput";
import { VerificationRequestWhereInput } from "../../../inputs/VerificationRequestWhereInput";
import { VerificationRequestWhereUniqueInput } from "../../../inputs/VerificationRequestWhereUniqueInput";
import { VerificationRequestScalarFieldEnum } from "../../../../enums/VerificationRequestScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyVerificationRequestArgs {
  @TypeGraphQL.Field(_type => VerificationRequestWhereInput, {
    nullable: true
  })
  where?: VerificationRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VerificationRequestOrderByInput], {
    nullable: true
  })
  orderBy?: VerificationRequestOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => VerificationRequestWhereUniqueInput, {
    nullable: true
  })
  cursor?: VerificationRequestWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VerificationRequestScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier" | "token" | "expires" | "createdAt" | "updatedAt"> | undefined;
}
