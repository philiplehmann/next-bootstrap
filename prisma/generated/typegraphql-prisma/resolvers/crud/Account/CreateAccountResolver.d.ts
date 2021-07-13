import { GraphQLResolveInfo } from "graphql";
import { CreateAccountArgs } from "./args/CreateAccountArgs";
import { Account } from "../../../models/Account";
export declare class CreateAccountResolver {
    createAccount(ctx: any, info: GraphQLResolveInfo, args: CreateAccountArgs): Promise<Account>;
}
