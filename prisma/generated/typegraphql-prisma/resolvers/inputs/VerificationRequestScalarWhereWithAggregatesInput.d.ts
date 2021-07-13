import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class VerificationRequestScalarWhereWithAggregatesInput {
    AND?: VerificationRequestScalarWhereWithAggregatesInput[] | undefined;
    OR?: VerificationRequestScalarWhereWithAggregatesInput[] | undefined;
    NOT?: VerificationRequestScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    identifier?: StringWithAggregatesFilter | undefined;
    token?: StringWithAggregatesFilter | undefined;
    expires?: DateTimeWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
