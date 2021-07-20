"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationRequestCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateVerificationRequestArgs_1 = require("./args/AggregateVerificationRequestArgs");
const CreateManyVerificationRequestArgs_1 = require("./args/CreateManyVerificationRequestArgs");
const CreateVerificationRequestArgs_1 = require("./args/CreateVerificationRequestArgs");
const DeleteManyVerificationRequestArgs_1 = require("./args/DeleteManyVerificationRequestArgs");
const DeleteVerificationRequestArgs_1 = require("./args/DeleteVerificationRequestArgs");
const FindFirstVerificationRequestArgs_1 = require("./args/FindFirstVerificationRequestArgs");
const FindManyVerificationRequestArgs_1 = require("./args/FindManyVerificationRequestArgs");
const FindUniqueVerificationRequestArgs_1 = require("./args/FindUniqueVerificationRequestArgs");
const GroupByVerificationRequestArgs_1 = require("./args/GroupByVerificationRequestArgs");
const UpdateManyVerificationRequestArgs_1 = require("./args/UpdateManyVerificationRequestArgs");
const UpdateVerificationRequestArgs_1 = require("./args/UpdateVerificationRequestArgs");
const UpsertVerificationRequestArgs_1 = require("./args/UpsertVerificationRequestArgs");
const helpers_1 = require("../../../helpers");
const VerificationRequest_1 = require("../../../models/VerificationRequest");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateVerificationRequest_1 = require("../../outputs/AggregateVerificationRequest");
const VerificationRequestGroupBy_1 = require("../../outputs/VerificationRequestGroupBy");
let VerificationRequestCrudResolver = class VerificationRequestCrudResolver {
    async verificationRequest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).verificationRequest.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstVerificationRequest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).verificationRequest.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async verificationRequests(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).verificationRequest.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createVerificationRequest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).verificationRequest.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyVerificationRequest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).verificationRequest.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteVerificationRequest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).verificationRequest.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateVerificationRequest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).verificationRequest.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyVerificationRequest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).verificationRequest.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyVerificationRequest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).verificationRequest.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertVerificationRequest(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).verificationRequest.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateVerificationRequest(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).verificationRequest.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByVerificationRequest(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).verificationRequest.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => VerificationRequest_1.VerificationRequest, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueVerificationRequestArgs_1.FindUniqueVerificationRequestArgs]),
    __metadata("design:returntype", Promise)
], VerificationRequestCrudResolver.prototype, "verificationRequest", null);
__decorate([
    TypeGraphQL.Query(_returns => VerificationRequest_1.VerificationRequest, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstVerificationRequestArgs_1.FindFirstVerificationRequestArgs]),
    __metadata("design:returntype", Promise)
], VerificationRequestCrudResolver.prototype, "findFirstVerificationRequest", null);
__decorate([
    TypeGraphQL.Query(_returns => [VerificationRequest_1.VerificationRequest], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyVerificationRequestArgs_1.FindManyVerificationRequestArgs]),
    __metadata("design:returntype", Promise)
], VerificationRequestCrudResolver.prototype, "verificationRequests", null);
__decorate([
    TypeGraphQL.Mutation(_returns => VerificationRequest_1.VerificationRequest, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateVerificationRequestArgs_1.CreateVerificationRequestArgs]),
    __metadata("design:returntype", Promise)
], VerificationRequestCrudResolver.prototype, "createVerificationRequest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyVerificationRequestArgs_1.CreateManyVerificationRequestArgs]),
    __metadata("design:returntype", Promise)
], VerificationRequestCrudResolver.prototype, "createManyVerificationRequest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => VerificationRequest_1.VerificationRequest, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteVerificationRequestArgs_1.DeleteVerificationRequestArgs]),
    __metadata("design:returntype", Promise)
], VerificationRequestCrudResolver.prototype, "deleteVerificationRequest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => VerificationRequest_1.VerificationRequest, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateVerificationRequestArgs_1.UpdateVerificationRequestArgs]),
    __metadata("design:returntype", Promise)
], VerificationRequestCrudResolver.prototype, "updateVerificationRequest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyVerificationRequestArgs_1.DeleteManyVerificationRequestArgs]),
    __metadata("design:returntype", Promise)
], VerificationRequestCrudResolver.prototype, "deleteManyVerificationRequest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyVerificationRequestArgs_1.UpdateManyVerificationRequestArgs]),
    __metadata("design:returntype", Promise)
], VerificationRequestCrudResolver.prototype, "updateManyVerificationRequest", null);
__decorate([
    TypeGraphQL.Mutation(_returns => VerificationRequest_1.VerificationRequest, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertVerificationRequestArgs_1.UpsertVerificationRequestArgs]),
    __metadata("design:returntype", Promise)
], VerificationRequestCrudResolver.prototype, "upsertVerificationRequest", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateVerificationRequest_1.AggregateVerificationRequest, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateVerificationRequestArgs_1.AggregateVerificationRequestArgs]),
    __metadata("design:returntype", Promise)
], VerificationRequestCrudResolver.prototype, "aggregateVerificationRequest", null);
__decorate([
    TypeGraphQL.Query(_returns => [VerificationRequestGroupBy_1.VerificationRequestGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByVerificationRequestArgs_1.GroupByVerificationRequestArgs]),
    __metadata("design:returntype", Promise)
], VerificationRequestCrudResolver.prototype, "groupByVerificationRequest", null);
VerificationRequestCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => VerificationRequest_1.VerificationRequest)
], VerificationRequestCrudResolver);
exports.VerificationRequestCrudResolver = VerificationRequestCrudResolver;
