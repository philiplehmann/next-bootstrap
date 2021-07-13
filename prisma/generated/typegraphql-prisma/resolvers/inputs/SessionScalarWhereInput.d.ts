import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SessionScalarWhereInput {
    AND?: SessionScalarWhereInput[] | undefined;
    OR?: SessionScalarWhereInput[] | undefined;
    NOT?: SessionScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    expires?: DateTimeFilter | undefined;
    sessionToken?: StringFilter | undefined;
    accessToken?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
