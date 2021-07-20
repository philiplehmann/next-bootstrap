import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AccountScalarWhereInput {
    AND?: AccountScalarWhereInput[] | undefined;
    OR?: AccountScalarWhereInput[] | undefined;
    NOT?: AccountScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    providerType?: StringFilter | undefined;
    providerId?: StringFilter | undefined;
    providerAccountId?: StringFilter | undefined;
    refreshToken?: StringNullableFilter | undefined;
    accessToken?: StringNullableFilter | undefined;
    accessTokenExpires?: DateTimeNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
