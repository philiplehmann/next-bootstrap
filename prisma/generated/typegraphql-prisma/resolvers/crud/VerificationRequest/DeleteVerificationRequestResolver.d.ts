import { GraphQLResolveInfo } from "graphql";
import { DeleteVerificationRequestArgs } from "./args/DeleteVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
export declare class DeleteVerificationRequestResolver {
    deleteVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: DeleteVerificationRequestArgs): Promise<VerificationRequest | null>;
}
