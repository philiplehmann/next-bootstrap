import { SessionCreateManyUserInputEnvelope } from "../inputs/SessionCreateManyUserInputEnvelope";
import { SessionCreateOrConnectWithoutUserInput } from "../inputs/SessionCreateOrConnectWithoutUserInput";
import { SessionCreateWithoutUserInput } from "../inputs/SessionCreateWithoutUserInput";
import { SessionScalarWhereInput } from "../inputs/SessionScalarWhereInput";
import { SessionUpdateManyWithWhereWithoutUserInput } from "../inputs/SessionUpdateManyWithWhereWithoutUserInput";
import { SessionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SessionUpdateWithWhereUniqueWithoutUserInput";
import { SessionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SessionUpsertWithWhereUniqueWithoutUserInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";
export declare class SessionUpdateManyWithoutUserInput {
    create?: SessionCreateWithoutUserInput[] | undefined;
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: SessionCreateManyUserInputEnvelope | undefined;
    connect?: SessionWhereUniqueInput[] | undefined;
    set?: SessionWhereUniqueInput[] | undefined;
    disconnect?: SessionWhereUniqueInput[] | undefined;
    delete?: SessionWhereUniqueInput[] | undefined;
    update?: SessionUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: SessionScalarWhereInput[] | undefined;
}
