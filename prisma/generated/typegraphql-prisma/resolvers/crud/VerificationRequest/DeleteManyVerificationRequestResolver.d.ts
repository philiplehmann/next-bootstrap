import { GraphQLResolveInfo } from "graphql";
import { DeleteManyVerificationRequestArgs } from "./args/DeleteManyVerificationRequestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyVerificationRequestResolver {
    deleteManyVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVerificationRequestArgs): Promise<AffectedRowsOutput>;
}
