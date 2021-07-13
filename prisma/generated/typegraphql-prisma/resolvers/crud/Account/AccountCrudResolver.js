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
exports.AccountCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateAccountArgs_1 = require("./args/AggregateAccountArgs");
const CreateAccountArgs_1 = require("./args/CreateAccountArgs");
const CreateManyAccountArgs_1 = require("./args/CreateManyAccountArgs");
const DeleteAccountArgs_1 = require("./args/DeleteAccountArgs");
const DeleteManyAccountArgs_1 = require("./args/DeleteManyAccountArgs");
const FindFirstAccountArgs_1 = require("./args/FindFirstAccountArgs");
const FindManyAccountArgs_1 = require("./args/FindManyAccountArgs");
const FindUniqueAccountArgs_1 = require("./args/FindUniqueAccountArgs");
const GroupByAccountArgs_1 = require("./args/GroupByAccountArgs");
const UpdateAccountArgs_1 = require("./args/UpdateAccountArgs");
const UpdateManyAccountArgs_1 = require("./args/UpdateManyAccountArgs");
const UpsertAccountArgs_1 = require("./args/UpsertAccountArgs");
const helpers_1 = require("../../../helpers");
const Account_1 = require("../../../models/Account");
const AccountGroupBy_1 = require("../../outputs/AccountGroupBy");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAccount_1 = require("../../outputs/AggregateAccount");
let AccountCrudResolver = class AccountCrudResolver {
    async account(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).account.findUnique({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async findFirstAccount(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).account.findFirst({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async accounts(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).account.findMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createAccount(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).account.create({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async createManyAccount(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).account.createMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteAccount(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).account.delete({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateAccount(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).account.update({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async deleteManyAccount(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).account.deleteMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async updateManyAccount(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).account.updateMany({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async upsertAccount(ctx, info, args) {
        const { _count } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).account.upsert({
            ...args,
            ...(_count && helpers_1.transformCountFieldIntoSelectRelationsCount(_count)),
        });
    }
    async aggregateAccount(ctx, info, args) {
        return helpers_1.getPrismaFromContext(ctx).account.aggregate({
            ...args,
            ...helpers_1.transformFields(graphql_fields_1.default(info)),
        });
    }
    async groupByAccount(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = helpers_1.transformFields(graphql_fields_1.default(info));
        return helpers_1.getPrismaFromContext(ctx).account.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Account_1.Account, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueAccountArgs_1.FindUniqueAccountArgs]),
    __metadata("design:returntype", Promise)
], AccountCrudResolver.prototype, "account", null);
__decorate([
    TypeGraphQL.Query(_returns => Account_1.Account, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstAccountArgs_1.FindFirstAccountArgs]),
    __metadata("design:returntype", Promise)
], AccountCrudResolver.prototype, "findFirstAccount", null);
__decorate([
    TypeGraphQL.Query(_returns => [Account_1.Account], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyAccountArgs_1.FindManyAccountArgs]),
    __metadata("design:returntype", Promise)
], AccountCrudResolver.prototype, "accounts", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Account_1.Account, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateAccountArgs_1.CreateAccountArgs]),
    __metadata("design:returntype", Promise)
], AccountCrudResolver.prototype, "createAccount", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAccountArgs_1.CreateManyAccountArgs]),
    __metadata("design:returntype", Promise)
], AccountCrudResolver.prototype, "createManyAccount", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Account_1.Account, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteAccountArgs_1.DeleteAccountArgs]),
    __metadata("design:returntype", Promise)
], AccountCrudResolver.prototype, "deleteAccount", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Account_1.Account, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateAccountArgs_1.UpdateAccountArgs]),
    __metadata("design:returntype", Promise)
], AccountCrudResolver.prototype, "updateAccount", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyAccountArgs_1.DeleteManyAccountArgs]),
    __metadata("design:returntype", Promise)
], AccountCrudResolver.prototype, "deleteManyAccount", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyAccountArgs_1.UpdateManyAccountArgs]),
    __metadata("design:returntype", Promise)
], AccountCrudResolver.prototype, "updateManyAccount", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Account_1.Account, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertAccountArgs_1.UpsertAccountArgs]),
    __metadata("design:returntype", Promise)
], AccountCrudResolver.prototype, "upsertAccount", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateAccount_1.AggregateAccount, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateAccountArgs_1.AggregateAccountArgs]),
    __metadata("design:returntype", Promise)
], AccountCrudResolver.prototype, "aggregateAccount", null);
__decorate([
    TypeGraphQL.Query(_returns => [AccountGroupBy_1.AccountGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByAccountArgs_1.GroupByAccountArgs]),
    __metadata("design:returntype", Promise)
], AccountCrudResolver.prototype, "groupByAccount", null);
AccountCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], AccountCrudResolver);
exports.AccountCrudResolver = AccountCrudResolver;
