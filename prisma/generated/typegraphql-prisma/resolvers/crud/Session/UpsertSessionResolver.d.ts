import { GraphQLResolveInfo } from "graphql";
import { UpsertSessionArgs } from "./args/UpsertSessionArgs";
import { Session } from "../../../models/Session";
export declare class UpsertSessionResolver {
    upsertSession(ctx: any, info: GraphQLResolveInfo, args: UpsertSessionArgs): Promise<Session>;
}
