import { GraphQLResolveInfo } from "graphql";
import { FindUniqueVerificationRequestArgs } from "./args/FindUniqueVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
export declare class FindUniqueVerificationRequestResolver {
    verificationRequest(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVerificationRequestArgs): Promise<VerificationRequest | null>;
}
