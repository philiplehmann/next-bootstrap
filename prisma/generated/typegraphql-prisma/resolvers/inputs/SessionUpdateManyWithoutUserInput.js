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
exports.SessionUpdateManyWithoutUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SessionCreateManyUserInputEnvelope_1 = require("../inputs/SessionCreateManyUserInputEnvelope");
const SessionCreateOrConnectWithoutUserInput_1 = require("../inputs/SessionCreateOrConnectWithoutUserInput");
const SessionCreateWithoutUserInput_1 = require("../inputs/SessionCreateWithoutUserInput");
const SessionScalarWhereInput_1 = require("../inputs/SessionScalarWhereInput");
const SessionUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/SessionUpdateManyWithWhereWithoutUserInput");
const SessionUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/SessionUpdateWithWhereUniqueWithoutUserInput");
const SessionUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/SessionUpsertWithWhereUniqueWithoutUserInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionUpdateManyWithoutUserInput = class SessionUpdateManyWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SessionCreateWithoutUserInput_1.SessionCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SessionUpdateManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SessionCreateOrConnectWithoutUserInput_1.SessionCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SessionUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SessionUpsertWithWhereUniqueWithoutUserInput_1.SessionUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SessionUpdateManyWithoutUserInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => SessionCreateManyUserInputEnvelope_1.SessionCreateManyUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", SessionCreateManyUserInputEnvelope_1.SessionCreateManyUserInputEnvelope)
], SessionUpdateManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SessionWhereUniqueInput_1.SessionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SessionUpdateManyWithoutUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SessionWhereUniqueInput_1.SessionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SessionUpdateManyWithoutUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SessionWhereUniqueInput_1.SessionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SessionUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SessionWhereUniqueInput_1.SessionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SessionUpdateManyWithoutUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SessionUpdateWithWhereUniqueWithoutUserInput_1.SessionUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SessionUpdateManyWithoutUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SessionUpdateManyWithWhereWithoutUserInput_1.SessionUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SessionUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SessionScalarWhereInput_1.SessionScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SessionUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
SessionUpdateManyWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SessionUpdateManyWithoutUserInput);
exports.SessionUpdateManyWithoutUserInput = SessionUpdateManyWithoutUserInput;
