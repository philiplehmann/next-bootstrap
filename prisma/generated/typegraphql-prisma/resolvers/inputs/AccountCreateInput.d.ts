import { UserCreateNestedOneWithoutAccountsInput } from "../inputs/UserCreateNestedOneWithoutAccountsInput";
export declare class AccountCreateInput {
    id?: string | undefined;
    providerType: string;
    providerId: string;
    providerAccountId: string;
    refreshToken?: string | undefined;
    accessToken?: string | undefined;
    accessTokenExpires?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user: UserCreateNestedOneWithoutAccountsInput;
}
