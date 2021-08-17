import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  firstName = "firstName",
  lastName = "lastName",
  name = "name",
  email = "email",
  emailVerificationToken = "emailVerificationToken",
  password = "password",
  emailVerified = "emailVerified",
  image = "image",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  roles = "roles"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
