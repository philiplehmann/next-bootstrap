import { GraphQLResolveInfo } from "graphql";
import { DeleteAccountArgs } from "./args/DeleteAccountArgs";
import { Account } from "../../../models/Account";
export declare class DeleteAccountResolver {
    deleteAccount(ctx: any, info: GraphQLResolveInfo, args: DeleteAccountArgs): Promise<Account | null>;
}
