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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyArgsTypesEnhanceMap = exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const crudResolversMap = {
    Account: crudResolvers.AccountCrudResolver,
    Session: crudResolvers.SessionCrudResolver,
    User: crudResolvers.UserCrudResolver,
    VerificationRequest: crudResolvers.VerificationRequestCrudResolver
};
const relationResolversMap = {
    Account: relationResolvers.AccountRelationsResolver,
    Session: relationResolvers.SessionRelationsResolver,
    User: relationResolvers.UserRelationsResolver
};
const actionResolversMap = {
    Account: {
        account: actionResolvers.FindUniqueAccountResolver,
        findFirstAccount: actionResolvers.FindFirstAccountResolver,
        accounts: actionResolvers.FindManyAccountResolver,
        createAccount: actionResolvers.CreateAccountResolver,
        createManyAccount: actionResolvers.CreateManyAccountResolver,
        deleteAccount: actionResolvers.DeleteAccountResolver,
        updateAccount: actionResolvers.UpdateAccountResolver,
        deleteManyAccount: actionResolvers.DeleteManyAccountResolver,
        updateManyAccount: actionResolvers.UpdateManyAccountResolver,
        upsertAccount: actionResolvers.UpsertAccountResolver,
        aggregateAccount: actionResolvers.AggregateAccountResolver,
        groupByAccount: actionResolvers.GroupByAccountResolver
    },
    Session: {
        session: actionResolvers.FindUniqueSessionResolver,
        findFirstSession: actionResolvers.FindFirstSessionResolver,
        sessions: actionResolvers.FindManySessionResolver,
        createSession: actionResolvers.CreateSessionResolver,
        createManySession: actionResolvers.CreateManySessionResolver,
        deleteSession: actionResolvers.DeleteSessionResolver,
        updateSession: actionResolvers.UpdateSessionResolver,
        deleteManySession: actionResolvers.DeleteManySessionResolver,
        updateManySession: actionResolvers.UpdateManySessionResolver,
        upsertSession: actionResolvers.UpsertSessionResolver,
        aggregateSession: actionResolvers.AggregateSessionResolver,
        groupBySession: actionResolvers.GroupBySessionResolver
    },
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    },
    VerificationRequest: {
        verificationRequest: actionResolvers.FindUniqueVerificationRequestResolver,
        findFirstVerificationRequest: actionResolvers.FindFirstVerificationRequestResolver,
        verificationRequests: actionResolvers.FindManyVerificationRequestResolver,
        createVerificationRequest: actionResolvers.CreateVerificationRequestResolver,
        createManyVerificationRequest: actionResolvers.CreateManyVerificationRequestResolver,
        deleteVerificationRequest: actionResolvers.DeleteVerificationRequestResolver,
        updateVerificationRequest: actionResolvers.UpdateVerificationRequestResolver,
        deleteManyVerificationRequest: actionResolvers.DeleteManyVerificationRequestResolver,
        updateManyVerificationRequest: actionResolvers.UpdateManyVerificationRequestResolver,
        upsertVerificationRequest: actionResolvers.UpsertVerificationRequestResolver,
        aggregateVerificationRequest: actionResolvers.AggregateVerificationRequestResolver,
        groupByVerificationRequest: actionResolvers.GroupByVerificationRequestResolver
    }
};
const resolversInfo = {
    Account: ["account", "findFirstAccount", "accounts", "createAccount", "createManyAccount", "deleteAccount", "updateAccount", "deleteManyAccount", "updateManyAccount", "upsertAccount", "aggregateAccount", "groupByAccount"],
    Session: ["session", "findFirstSession", "sessions", "createSession", "createManySession", "deleteSession", "updateSession", "deleteManySession", "updateManySession", "upsertSession", "aggregateSession", "groupBySession"],
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
    VerificationRequest: ["verificationRequest", "findFirstVerificationRequest", "verificationRequests", "createVerificationRequest", "createManyVerificationRequest", "deleteVerificationRequest", "updateVerificationRequest", "deleteManyVerificationRequest", "updateManyVerificationRequest", "upsertVerificationRequest", "aggregateVerificationRequest", "groupByVerificationRequest"]
};
const relationResolversInfo = {
    Account: ["user"],
    Session: ["user"],
    User: ["accounts", "sessions"]
};
const modelsInfo = {
    Account: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    Session: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    User: ["id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt", "roles"],
    VerificationRequest: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"]
};
const inputsInfo = {
    AccountWhereInput: ["AND", "OR", "NOT", "id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "user"],
    AccountOrderByInput: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountWhereUniqueInput: ["id", "providerId_providerAccountId"],
    AccountScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    SessionWhereInput: ["AND", "OR", "NOT", "id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "user"],
    SessionOrderByInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionWhereUniqueInput: ["id", "sessionToken", "accessToken"],
    SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt", "accounts", "sessions", "roles"],
    UserOrderByInput: ["id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt", "roles"],
    UserWhereUniqueInput: ["id", "email"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt", "roles"],
    VerificationRequestWhereInput: ["AND", "OR", "NOT", "id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestOrderByInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestWhereUniqueInput: ["id", "token", "identifier_token"],
    VerificationRequestScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    AccountCreateInput: ["id", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "user"],
    AccountUpdateInput: ["id", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "user"],
    AccountCreateManyInput: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountUpdateManyMutationInput: ["id", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    SessionCreateInput: ["id", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "user"],
    SessionUpdateInput: ["id", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "user"],
    SessionCreateManyInput: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionUpdateManyMutationInput: ["id", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    UserCreateInput: ["id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt", "roles", "accounts", "sessions"],
    UserUpdateInput: ["id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt", "roles", "accounts", "sessions"],
    UserCreateManyInput: ["id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt", "roles"],
    UserUpdateManyMutationInput: ["id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt", "roles"],
    VerificationRequestCreateInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestUpdateInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestCreateManyInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestUpdateManyMutationInput: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    AccountProviderIdProviderAccountIdCompoundUniqueInput: ["providerId", "providerAccountId"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    AccountListRelationFilter: ["every", "some", "none"],
    SessionListRelationFilter: ["every", "some", "none"],
    JsonFilter: ["equals", "not"],
    JsonWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    VerificationRequestIdentifierTokenCompoundUniqueInput: ["identifier", "token"],
    UserCreateNestedOneWithoutAccountsInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutAccountsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutSessionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AccountCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    SessionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    AccountUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    SessionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedJsonFilter: ["equals", "not"],
    UserCreateWithoutAccountsInput: ["id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt", "roles", "sessions"],
    UserCreateOrConnectWithoutAccountsInput: ["where", "create"],
    UserUpsertWithoutAccountsInput: ["update", "create"],
    UserUpdateWithoutAccountsInput: ["id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt", "roles", "sessions"],
    UserCreateWithoutSessionsInput: ["id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt", "roles", "accounts"],
    UserCreateOrConnectWithoutSessionsInput: ["where", "create"],
    UserUpsertWithoutSessionsInput: ["update", "create"],
    UserUpdateWithoutSessionsInput: ["id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt", "roles", "accounts"],
    AccountCreateWithoutUserInput: ["id", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountCreateOrConnectWithoutUserInput: ["where", "create"],
    AccountCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    SessionCreateWithoutUserInput: ["id", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionCreateOrConnectWithoutUserInput: ["where", "create"],
    SessionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    AccountUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AccountUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AccountUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AccountScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    SessionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    SessionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    SessionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    AccountCreateManyUserInput: ["id", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    SessionCreateManyUserInput: ["id", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    AccountUpdateWithoutUserInput: ["id", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    SessionUpdateWithoutUserInput: ["id", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"]
};
const outputsInfo = {
    AggregateAccount: ["_count", "_min", "_max"],
    AccountGroupBy: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateSession: ["_count", "_min", "_max"],
    SessionGroupBy: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt", "roles", "_count", "_min", "_max"],
    AggregateVerificationRequest: ["_count", "_min", "_max"],
    VerificationRequestGroupBy: ["id", "identifier", "token", "expires", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    AccountCountAggregate: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt", "_all"],
    AccountMinAggregate: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    AccountMaxAggregate: ["id", "userId", "providerType", "providerId", "providerAccountId", "refreshToken", "accessToken", "accessTokenExpires", "createdAt", "updatedAt"],
    SessionCountAggregate: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt", "_all"],
    SessionMinAggregate: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    SessionMaxAggregate: ["id", "userId", "expires", "sessionToken", "accessToken", "createdAt", "updatedAt"],
    UserCountAggregate: ["id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt", "roles", "_all"],
    UserMinAggregate: ["id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt"],
    UserMaxAggregate: ["id", "firstName", "lastName", "name", "email", "password", "emailVerified", "image", "createdAt", "updatedAt"],
    VerificationRequestCountAggregate: ["id", "identifier", "token", "expires", "createdAt", "updatedAt", "_all"],
    VerificationRequestMinAggregate: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"],
    VerificationRequestMaxAggregate: ["id", "identifier", "token", "expires", "createdAt", "updatedAt"]
};
const argsInfo = {
    FindUniqueAccountArgs: ["where"],
    FindFirstAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAccountArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAccountArgs: ["data"],
    CreateManyAccountArgs: ["data", "skipDuplicates"],
    DeleteAccountArgs: ["where"],
    UpdateAccountArgs: ["data", "where"],
    DeleteManyAccountArgs: ["where"],
    UpdateManyAccountArgs: ["data", "where"],
    UpsertAccountArgs: ["where", "create", "update"],
    AggregateAccountArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAccountArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueSessionArgs: ["where"],
    FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateSessionArgs: ["data"],
    CreateManySessionArgs: ["data", "skipDuplicates"],
    DeleteSessionArgs: ["where"],
    UpdateSessionArgs: ["data", "where"],
    DeleteManySessionArgs: ["where"],
    UpdateManySessionArgs: ["data", "where"],
    UpsertSessionArgs: ["where", "create", "update"],
    AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueVerificationRequestArgs: ["where"],
    FindFirstVerificationRequestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyVerificationRequestArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateVerificationRequestArgs: ["data"],
    CreateManyVerificationRequestArgs: ["data", "skipDuplicates"],
    DeleteVerificationRequestArgs: ["where"],
    UpdateVerificationRequestArgs: ["data", "where"],
    DeleteManyVerificationRequestArgs: ["where"],
    UpdateManyVerificationRequestArgs: ["data", "where"],
    UpsertVerificationRequestArgs: ["where", "create", "update"],
    AggregateVerificationRequestArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByVerificationRequestArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = resolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                    allActionsDecorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
                }
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                decorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
                }
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            for (const decorator of decorators) {
                decorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
            }
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        for (const decorator of enhanceConfig.class) {
            decorator(typeClass);
        }
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                for (const allFieldsDecorator of allFieldsDecorators) {
                    allFieldsDecorator(typePrototype, typeFieldName);
                }
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            for (const fieldDecorator of fieldDecorators) {
                fieldDecorator(typePrototype, typeFieldName);
            }
        }
    }
}
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
