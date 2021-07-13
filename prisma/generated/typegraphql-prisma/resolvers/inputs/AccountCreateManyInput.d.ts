export declare class AccountCreateManyInput {
    id?: string | undefined;
    userId: string;
    providerType: string;
    providerId: string;
    providerAccountId: string;
    refreshToken?: string | undefined;
    accessToken?: string | undefined;
    accessTokenExpires?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
