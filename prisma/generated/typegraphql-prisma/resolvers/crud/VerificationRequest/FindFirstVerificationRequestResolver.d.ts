import { GraphQLResolveInfo } from "graphql";
import { FindFirstVerificationRequestArgs } from "./args/FindFirstVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
export declare class FindFirstVerificationRequestResolver {
    findFirstVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: FindFirstVerificationRequestArgs): Promise<VerificationRequest | null>;
}
