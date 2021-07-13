import { GraphQLResolveInfo } from "graphql";
import { GroupByVerificationRequestArgs } from "./args/GroupByVerificationRequestArgs";
import { VerificationRequestGroupBy } from "../../outputs/VerificationRequestGroupBy";
export declare class GroupByVerificationRequestResolver {
    groupByVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: GroupByVerificationRequestArgs): Promise<VerificationRequestGroupBy[]>;
}
