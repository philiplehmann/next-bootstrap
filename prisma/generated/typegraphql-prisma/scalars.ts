import { Decimal } from "@prisma/client/runtime";
import { GraphQLScalarType } from "graphql";

export const DecimalJSScalar = new GraphQLScalarType({
  name: "Decimal",
  description: "GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library.",
  serialize: (value: unknown) => {
    if (!(value instanceof Decimal)) {
      throw new Error(`[DecimalError] Invalid argument: ${typeof value}. Expected Prisma.Decimal instance.`);
    }
    return value.toString();
  },
  parseValue: (value: unknown) => {
    if (!(typeof value === "string")) {
      throw new Error(`[DecimalError] Invalid argument: ${typeof value}. Expected string.`);
    }
    return new Decimal(value);
  },
});

