import { AccountOrderByInput } from "../../../inputs/AccountOrderByInput";
import { AccountScalarWhereWithAggregatesInput } from "../../../inputs/AccountScalarWhereWithAggregatesInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
export declare class GroupByAccountArgs {
    where?: AccountWhereInput | undefined;
    orderBy?: AccountOrderByInput[] | undefined;
    by: Array<"id" | "userId" | "providerType" | "providerId" | "providerAccountId" | "refreshToken" | "accessToken" | "accessTokenExpires" | "createdAt" | "updatedAt">;
    having?: AccountScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
