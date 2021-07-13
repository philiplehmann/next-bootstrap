import { GraphQLResolveInfo } from "graphql";
import { UpdateVerificationRequestArgs } from "./args/UpdateVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
export declare class UpdateVerificationRequestResolver {
    updateVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: UpdateVerificationRequestArgs): Promise<VerificationRequest | null>;
}
