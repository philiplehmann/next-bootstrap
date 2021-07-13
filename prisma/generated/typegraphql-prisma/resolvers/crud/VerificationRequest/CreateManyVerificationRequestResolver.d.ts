import { GraphQLResolveInfo } from "graphql";
import { CreateManyVerificationRequestArgs } from "./args/CreateManyVerificationRequestArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyVerificationRequestResolver {
    createManyVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: CreateManyVerificationRequestArgs): Promise<AffectedRowsOutput>;
}
