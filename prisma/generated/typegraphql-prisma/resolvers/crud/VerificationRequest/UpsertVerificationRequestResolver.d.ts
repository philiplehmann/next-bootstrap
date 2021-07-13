import { GraphQLResolveInfo } from "graphql";
import { UpsertVerificationRequestArgs } from "./args/UpsertVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
export declare class UpsertVerificationRequestResolver {
    upsertVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: UpsertVerificationRequestArgs): Promise<VerificationRequest>;
}
