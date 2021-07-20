import { Prisma } from "@prisma/client";
import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
    id?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    roles?: Prisma.InputJsonValue | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
}
