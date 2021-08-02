import * as TypeGraphQL from "type-graphql";

export enum Role {
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
