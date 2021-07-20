import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    firstName?: StringNullableFilter | undefined;
    lastName?: StringNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    email?: StringNullableFilter | undefined;
    password?: StringNullableFilter | undefined;
    emailVerified?: DateTimeNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    sessions?: SessionListRelationFilter | undefined;
    roles?: JsonFilter | undefined;
}
