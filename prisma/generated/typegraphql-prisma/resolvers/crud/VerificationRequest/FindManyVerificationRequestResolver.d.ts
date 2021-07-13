import { GraphQLResolveInfo } from "graphql";
import { FindManyVerificationRequestArgs } from "./args/FindManyVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
export declare class FindManyVerificationRequestResolver {
    verificationRequests(ctx: any, info: GraphQLResolveInfo, args: FindManyVerificationRequestArgs): Promise<VerificationRequest[]>;
}
