import { Account } from "../../../models/Account";
import { User } from "../../../models/User";
export declare class AccountRelationsResolver {
    user(account: Account, ctx: any): Promise<User>;
}
