import { GraphQLResolveInfo } from "graphql";
import { CreateVerificationRequestArgs } from "./args/CreateVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
export declare class CreateVerificationRequestResolver {
    createVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: CreateVerificationRequestArgs): Promise<VerificationRequest>;
}
