import { GraphQLResolveInfo } from "graphql";
import { AggregateVerificationRequestArgs } from "./args/AggregateVerificationRequestArgs";
import { CreateManyVerificationRequestArgs } from "./args/CreateManyVerificationRequestArgs";
import { CreateVerificationRequestArgs } from "./args/CreateVerificationRequestArgs";
import { DeleteManyVerificationRequestArgs } from "./args/DeleteManyVerificationRequestArgs";
import { DeleteVerificationRequestArgs } from "./args/DeleteVerificationRequestArgs";
import { FindFirstVerificationRequestArgs } from "./args/FindFirstVerificationRequestArgs";
import { FindManyVerificationRequestArgs } from "./args/FindManyVerificationRequestArgs";
import { FindUniqueVerificationRequestArgs } from "./args/FindUniqueVerificationRequestArgs";
import { GroupByVerificationRequestArgs } from "./args/GroupByVerificationRequestArgs";
import { UpdateManyVerificationRequestArgs } from "./args/UpdateManyVerificationRequestArgs";
import { UpdateVerificationRequestArgs } from "./args/UpdateVerificationRequestArgs";
import { UpsertVerificationRequestArgs } from "./args/UpsertVerificationRequestArgs";
import { VerificationRequest } from "../../../models/VerificationRequest";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVerificationRequest } from "../../outputs/AggregateVerificationRequest";
import { VerificationRequestGroupBy } from "../../outputs/VerificationRequestGroupBy";
export declare class VerificationRequestCrudResolver {
    verificationRequest(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVerificationRequestArgs): Promise<VerificationRequest | null>;
    findFirstVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: FindFirstVerificationRequestArgs): Promise<VerificationRequest | null>;
    verificationRequests(ctx: any, info: GraphQLResolveInfo, args: FindManyVerificationRequestArgs): Promise<VerificationRequest[]>;
    createVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: CreateVerificationRequestArgs): Promise<VerificationRequest>;
    createManyVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: CreateManyVerificationRequestArgs): Promise<AffectedRowsOutput>;
    deleteVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: DeleteVerificationRequestArgs): Promise<VerificationRequest | null>;
    updateVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: UpdateVerificationRequestArgs): Promise<VerificationRequest | null>;
    deleteManyVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVerificationRequestArgs): Promise<AffectedRowsOutput>;
    updateManyVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVerificationRequestArgs): Promise<AffectedRowsOutput>;
    upsertVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: UpsertVerificationRequestArgs): Promise<VerificationRequest>;
    aggregateVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: AggregateVerificationRequestArgs): Promise<AggregateVerificationRequest>;
    groupByVerificationRequest(ctx: any, info: GraphQLResolveInfo, args: GroupByVerificationRequestArgs): Promise<VerificationRequestGroupBy[]>;
}