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
exports.SessionCreateNestedManyWithoutUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SessionCreateManyUserInputEnvelope_1 = require("../inputs/SessionCreateManyUserInputEnvelope");
const SessionCreateOrConnectWithoutUserInput_1 = require("../inputs/SessionCreateOrConnectWithoutUserInput");
const SessionCreateWithoutUserInput_1 = require("../inputs/SessionCreateWithoutUserInput");
const SessionWhereUniqueInput_1 = require("../inputs/SessionWhereUniqueInput");
let SessionCreateNestedManyWithoutUserInput = class SessionCreateNestedManyWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SessionCreateWithoutUserInput_1.SessionCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SessionCreateNestedManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SessionCreateOrConnectWithoutUserInput_1.SessionCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SessionCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SessionCreateManyUserInputEnvelope_1.SessionCreateManyUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", SessionCreateManyUserInputEnvelope_1.SessionCreateManyUserInputEnvelope)
], SessionCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SessionWhereUniqueInput_1.SessionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SessionCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
SessionCreateNestedManyWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SessionCreateNestedManyWithoutUserInput);
exports.SessionCreateNestedManyWithoutUserInput = SessionCreateNestedManyWithoutUserInput;
