import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AccountScalarWhereWithAggregatesInput {
    AND?: AccountScalarWhereWithAggregatesInput[] | undefined;
    OR?: AccountScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AccountScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    providerType?: StringWithAggregatesFilter | undefined;
    providerId?: StringWithAggregatesFilter | undefined;
    providerAccountId?: StringWithAggregatesFilter | undefined;
    refreshToken?: StringNullableWithAggregatesFilter | undefined;
    accessToken?: StringNullableWithAggregatesFilter | undefined;
    accessTokenExpires?: DateTimeNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
