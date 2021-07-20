import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
    AND?: UserScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    firstName?: StringNullableWithAggregatesFilter | undefined;
    lastName?: StringNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
    password?: StringNullableWithAggregatesFilter | undefined;
    emailVerified?: DateTimeNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    roles?: JsonWithAggregatesFilter | undefined;
}
