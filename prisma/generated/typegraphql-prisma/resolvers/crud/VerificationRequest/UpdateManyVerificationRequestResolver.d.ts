import { GraphQLResolveInfo } from "graphql";
import { UpdateManyVerificationRequestArgs } from "./args/UpdateManyVerificationRequestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyVerificationRequestResolver {
    updateManyVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVerificationRequestArgs): Promise<AffectedRowsOutput>;
}
