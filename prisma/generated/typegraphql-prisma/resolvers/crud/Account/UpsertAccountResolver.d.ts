import { GraphQLResolveInfo } from "graphql";
import { UpsertAccountArgs } from "./args/UpsertAccountArgs";
import { Account } from "../../../models/Account";
export declare class UpsertAccountResolver {
    upsertAccount(ctx: any, info: GraphQLResolveInfo, args: UpsertAccountArgs): Promise<Account>;
}
