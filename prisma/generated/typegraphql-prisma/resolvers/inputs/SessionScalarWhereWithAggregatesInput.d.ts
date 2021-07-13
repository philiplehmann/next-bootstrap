import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SessionScalarWhereWithAggregatesInput {
    AND?: SessionScalarWhereWithAggregatesInput[] | undefined;
    OR?: SessionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SessionScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    expires?: DateTimeWithAggregatesFilter | undefined;
    sessionToken?: StringWithAggregatesFilter | undefined;
    accessToken?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
