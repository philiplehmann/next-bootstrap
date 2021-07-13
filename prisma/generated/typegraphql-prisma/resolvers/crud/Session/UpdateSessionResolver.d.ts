import { GraphQLResolveInfo } from "graphql";
import { UpdateSessionArgs } from "./args/UpdateSessionArgs";
import { Session } from "../../../models/Session";
export declare class UpdateSessionResolver {
    updateSession(ctx: any, info: GraphQLResolveInfo, args: UpdateSessionArgs): Promise<Session | null>;
}
