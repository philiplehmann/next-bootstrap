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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateManyWithoutUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AccountCreateManyUserInputEnvelope_1 = require("../inputs/AccountCreateManyUserInputEnvelope");
const AccountCreateOrConnectWithoutUserInput_1 = require("../inputs/AccountCreateOrConnectWithoutUserInput");
const AccountCreateWithoutUserInput_1 = require("../inputs/AccountCreateWithoutUserInput");
const AccountScalarWhereInput_1 = require("../inputs/AccountScalarWhereInput");
const AccountUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/AccountUpdateManyWithWhereWithoutUserInput");
const AccountUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/AccountUpdateWithWhereUniqueWithoutUserInput");
const AccountUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/AccountUpsertWithWhereUniqueWithoutUserInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountUpdateManyWithoutUserInput = class AccountUpdateManyWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [AccountCreateWithoutUserInput_1.AccountCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AccountUpdateManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AccountCreateOrConnectWithoutUserInput_1.AccountCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AccountUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AccountUpsertWithWhereUniqueWithoutUserInput_1.AccountUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AccountUpdateManyWithoutUserInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => AccountCreateManyUserInputEnvelope_1.AccountCreateManyUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", AccountCreateManyUserInputEnvelope_1.AccountCreateManyUserInputEnvelope)
], AccountUpdateManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AccountUpdateManyWithoutUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AccountUpdateManyWithoutUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AccountUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AccountWhereUniqueInput_1.AccountWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AccountUpdateManyWithoutUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AccountUpdateWithWhereUniqueWithoutUserInput_1.AccountUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AccountUpdateManyWithoutUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AccountUpdateManyWithWhereWithoutUserInput_1.AccountUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AccountUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AccountScalarWhereInput_1.AccountScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AccountUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
AccountUpdateManyWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], AccountUpdateManyWithoutUserInput);
exports.AccountUpdateManyWithoutUserInput = AccountUpdateManyWithoutUserInput;
