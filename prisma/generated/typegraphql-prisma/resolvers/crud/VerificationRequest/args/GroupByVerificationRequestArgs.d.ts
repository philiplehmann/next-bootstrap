import { VerificationRequestOrderByInput } from "../../../inputs/VerificationRequestOrderByInput";
import { VerificationRequestScalarWhereWithAggregatesInput } from "../../../inputs/VerificationRequestScalarWhereWithAggregatesInput";
import { VerificationRequestWhereInput } from "../../../inputs/VerificationRequestWhereInput";
export declare class GroupByVerificationRequestArgs {
    where?: VerificationRequestWhereInput | undefined;
    orderBy?: VerificationRequestOrderByInput[] | undefined;
    by: Array<"id" | "identifier" | "token" | "expires" | "createdAt" | "updatedAt">;
    having?: VerificationRequestScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
