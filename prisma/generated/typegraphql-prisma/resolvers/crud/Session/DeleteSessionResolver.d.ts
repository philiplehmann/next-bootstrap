import { GraphQLResolveInfo } from "graphql";
import { DeleteSessionArgs } from "./args/DeleteSessionArgs";
import { Session } from "../../../models/Session";
export declare class DeleteSessionResolver {
    deleteSession(ctx: any, info: GraphQLResolveInfo, args: DeleteSessionArgs): Promise<Session | null>;
}
